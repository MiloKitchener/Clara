import requests
import json
from .models import Field, Dataset
from datetime import datetime


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
                Field.objects.create(name=field['name'], normalized_name=field['name'], alias=field['alias'], type=field['type'], dataset=dataset)


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
    return [dict(**a, **b) for a, b in zip(data1, data2)]
