import requests
import json
import pandas as pd
from fuzzywuzzy import process
from .models import Field, Dataset
from datetime import datetime
import urllib.request


def create_dataset_fields(url, dataset_name):
    # Request the layers and get the response in JSON
    r = requests.post(url + 'layers?f=json')
    json_response = json.loads(r.text)

    # For every layer
    for layer in json_response['layers']:
        # Get layer that is the dataset we are looking for
        if layer['name'] == dataset_name:
            dataset = Dataset.objects.get(name=dataset_name)
            # Add all the fields to the database
            for field in layer['fields']:
                Field.objects.create(name=field['name'], normalized_name=field['name'], alias=field['alias'],
                                     type=field['type'], dataset=dataset)
    # For every table
    for table in json_response['tables']:
        # Get layer that is the dataset we are looking for
        if table['name'] == dataset_name:
            dataset = Dataset.objects.get(name=dataset_name)
            # Add all the fields to the database
            for field in table['fields']:
                Field.objects.create(name=field['name'], normalized_name=field['name'], alias=field['alias'],
                                     type=field['type'], dataset=dataset)


def create_datasets(url):
    # Request the layers and get the response in JSON
    r = requests.post(url + 'layers?f=json')
    json_response = json.loads(r.text)

    # For every layer
    for layer in json_response['layers']:
        # TODO: Put actual update datetime
        Dataset.objects.create(
            name=layer['name'],
            desc=layer['description'],
            api_url=url + str(layer['id']) + '/',
            parent_url=url,
            type="Open Data" + layer['type'],
            datetime_updated=datetime.now()
        )
        create_dataset_fields(url, layer['name'])
    # For every table
    for table in json_response['tables']:
        # TODO: Put actual update datetime
        Dataset.objects.create(
            name=table['name'],
            desc=table['description'],
            api_url=url + str(table['id']) + '/',
            parent_url=url,
            type="Open Data" + table['type'],
            datetime_updated=datetime.now()
        )
        create_dataset_fields(url, table['name'])


def fetch_data(url, replace_name, field_name):
    # Add on the field we wish to search
    url = url + 'query?where=1%3D1&returnGeometry=false&f=json' + "&outFields=" + field_name
    # Request the api url and get the response in JSON
    r = requests.post(url)
    json_response = json.loads(r.text)

    # Pull out the values for the field
    data_list = []
    for attribute in json_response['features']:

        data = {replace_name: attribute['attributes'].pop(field_name)}
        # Assign the values to a new variable
        data_list.append(data)
    return data_list


def combine_data_list(data1, data2):
    # This fancy dancy piece of black magic takes two lists of dictionaries
    # and makes one list with the dictionaries combined by index
    # ** is explained by https://treyhunner.com/2018/10/asterisks-in-python-what-they-are-and-how-to-use-them/
    # this sorta makes sense now
    return [dict(**a, **b) for a, b in zip(data1, data2)]


# function to get a list of tables and fields from a given api url
# function will compare the fields of each dataset with the normalised names stored in the db
# the fuzzy search algorithm will then return a list of normalized names and their respective simmilarity score
# the algorithm will also take into account the datatype (str, int, long ect) of the field
# if the simmilarity scores on the normalized names do not return enough or the results have too low of a score
# the fuzzy search will then run on the list of 'mapped' or 'original named' fields queried from the database
# the better list, or perhaps a combonation of the 2 lists will be returned back to the front end for the user to confirm.
# return object structure:
# { db_Name: 'str',
#   db_desc: 'str',
#   db_url:  'str',
#   db_fields: [
#       {field_name:'str',
#        data_type: 'str',
#        example_value: 'db.row[0]',
#        norm_name_lst: [ {'srr',ratio}, {'str', ratio}]}
#   ]
def map_fields_to_normalized_name(url):
    # Request the layers and get the response in JSON
    r = requests.post(url + 'layers?f=json')
    json_response = json.loads(r.text)

    # populates lists of dataset fields and normalised names
    # TODO: add in error checking for empty data-frame
    # type is not needed now but will be needed later for advanced matching
    df_fields = pd.DataFrame(list(Field.objects.all().values('name', 'normalized_name', 'type')))

    # defines list of objects that will be returned
    resp_list = []
    resp_data = {}
    # For every layer
    for layer in json_response['layers']:
        resp_data = {} # data obj that will be populated and then appended into the resp_list
        resp_data['db_Name'] = layer['name']
        resp_data['db_desc'] = layer['description']
        resp_data['db_fields'] = []

        for field in layer['fields']:
            # instanciates a new field data obj and populates the basic objects
            field_data = {} # data obj that will be populated and added to the field_list
            # TODO: add in more robust matching, e.g searching through normalized names first and only searching through all field names if nessicary
            # TODO: or only send back rows that do not have a 100% or 95% match


            # populating the rest of the obj
            field_data['field_name'] = field['name']
            field_data['data_type'] = field['type']

            # basic matching fuzzymatch the name vs normal names then match them with the actual field name, append lists together
            field_data['norm_name_list'] = process.extract(field['name'], df_fields.normalized_name.unique().tolist(),
                                                           limit=5)

            tmp_dict = dict(field_data['norm_name_list'])

            # changes the normal row to its coresponding normalized name when comparing vs the default names
            for row in process.extract(field['name'], df_fields.name.unique().tolist(), limit=5):

                # data will contain the normalized name and the ratio coresponding to the unmapped name
                data = (df_fields.loc[df_fields.name == row[0], 'normalized_name'].values[0], row[1])
                # check if the normalized name is already available in field_data['norm_name_list], if not add it
                if data[0] not in tmp_dict:
                    field_data['norm_name_list'].append(data)

            # appending list to object
            resp_data['db_fields'].append(field_data)
        resp_list.append(resp_data)

    # For every table
    for table in json_response['tables']:
        resp_data = {}  # data obj that will be populated and then appended into the resp_list
        resp_data['db_Name'] = table['name']
        resp_data['db_desc'] = table['description']
        resp_data['db_fields'] = []

        for field in table['fields']:
            # instanciates a new field data obj and populates the basic objects
            field_data = {}  # data obj that will be populated and added to the field_list
            # TODO: add in more robust matching, e.g searching through normalized names first and only searching through all field names if nessicary
            # TODO: or only send back rows that do not have a 100% or 95% match

            # populating the rest of the obj
            field_data['field_name'] = field['name']
            field_data['data_type'] = field['type']

            # basic matching fuzzymatch the name vs normal names then match them with the actual field name, append lists together
            field_data['norm_name_list'] = process.extract(field['name'], df_fields.normalized_name.unique().tolist(), limit=5)

            tmp_dict = dict(field_data['norm_name_list'])

            #changes the normal row to its coresponding normalized name when comparing vs the default names
            for row in process.extract(field['name'], df_fields.name.unique().tolist(), limit=5):

                # data will contain the normalized name and the ratio coresponding to the unmapped name
                data = (df_fields.loc[df_fields.name == row[0], 'normalized_name'].values[0], row[1])
                # check if the normalized name is already available in field_data['norm_name_list], if not add it
                if data[0] not in tmp_dict:
                    field_data['norm_name_list'].append(data)

            # appending list to object
            resp_data['db_fields'].append(field_data)
        resp_list.append(resp_data)

    return  json.dumps(resp_data)