import requests
import json

URL = 'https://maps.cambridge.ca/arcgispub/rest/services/OpenData2/MapServer/15/query?where=1%3D1&outFields=TOTAL_PERMIT_SPACES,TOTAL_FREE_SPACES&returnGeometry=false&f=json'
# URL = 'https://services1.arcgis.com/qAo1OsXi67t7XgmS/arcgis/rest/services/Traffic_Volumes/FeatureServer/0/query?where=1%3D1&outFields=SPEED_LIMIT,AADT&returnGeometry=false&f=json'

r = requests.post(URL)

jsonResponse = json.loads(r.text)
for attribute in jsonResponse['features']:
    # value["x"] = value.pop(attribute)
    # value["y"] = value.pop(attribute)
    print(attribute)
