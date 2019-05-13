import requests
import json

# URL = 'https://maps.cambridge.ca/arcgispub/rest/services/OpenData2/MapServer/15/query?where=1%3D1&outFields=TOTAL_PERMIT_SPACES,TOTAL_FREE_SPACES&returnGeometry=false&f=json'
# url = 'https://services1.arcgis.com/qAo1OsXi67t7XgmS/arcgis/rest/services/Traffic_Volumes/FeatureServer/0/query?where=1%3D1&outFields=SPEED_LIMIT&returnGeometry=false&f=json'
#
# r = requests.post(url)
#
# jsonResponse = json.loads(r.text)
# for attribute in jsonResponse['features']:
#     data = {}
#     field_name = list(attribute['attributes'].keys())[0]
#     data["x"] = attribute['attributes'][field_name]
# print(data)

def fetch_data(url, replace_name):
    r = requests.post(url)
    json_response = json.loads(r.text)
    data_list = []
    for attribute in json_response['features']:
        data = {}
        field_name = list(attribute['attributes'].keys())[0]
        data[replace_name] = attribute['attributes'].pop(field_name)
        data_list.append(data)
    return data_list


def combine_data_list(data1, data2):
    # This fancy dancy piece of black magic takes two lists of dictionaries
    # and makes one list with the dictionaries combined by index
    return [dict(**a, **b) for a, b in zip(data1, data2)]
