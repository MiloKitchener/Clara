from botocore.exceptions import ClientError
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from .models import *
from django.shortcuts import render
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from .forms import CustomUserCreationForm
from rest_framework import viewsets
from .dal import *
from rest_framework.decorators import action
from rest_framework.reverse import reverse
import requests
import pandas as pd
import boto3
import os


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if not (data.get('username')) or (not data.get('email') or (not data.get('password1'))):
            # not a valid user, no user will be created. data will return
            print('user invalid, user not created')
            # will return user to the sign up page to try again
            # CHANGE THIS TO BE DYNAMIC AND NOT A LINK EXCLUSIVE TO LOCAL INSTANCES
            return HttpResponse("err")
        else:
            # user is valid and created
            print('valid user is created')
            user = User.objects.create_user(username=data.get('username'), email=data.get('email'),
                                            password=data.get('password1'))
            return HttpResponse("success")
    else:
        form = CustomUserCreationForm()


# API endpoint that allows datasets to be viewed or edited
class DatasetView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        # Select all datasets
        queryset = Dataset.objects.all().order_by('name')
        data_type = self.request.query_params.get('type', None)
        if data_type is not None:
            queryset = queryset.filter(type=data_type)
        return queryset

    serializer_class = DatasetSerializer

    # Get fields for dataset
    @action(detail=True)
    def field_names(self, request, pk=None):
        queryset = Field.objects.filter(dataset__pk=pk)
        return Response(queryset.values())


class DatasetCreateView(APIView):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)
    def post(self, request):
        url = request.data.get('url')
        print(url)

        create_datasets(url)
        return Response("Success")


class DatasetMapView(APIView):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)
    def post(self, request):
        url = request.data.get('url')
        print(url)
        resp = map_fields_to_normalized_name(url)
        return Response(resp)


# API endpoint that allows fields to be viewed or edited
class FieldView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Field.objects.all()
    serializer_class = FieldSerializer


# API endpoint that allows users to be viewed or edited
class UserView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']


# API endpoint that allows permissions to be viewed or edited
class PermissionView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


class APICredentialsView(viewsets.ModelViewSet):
    # authenticate the user
    #  permission_classes = (IsAuthenticated,)

    queryset = APICredentials.objects.all()
    serializer_class = APICredentialsSerializer

    def create(self, request, **kwargs):
        # verify if the credentials are correct
        # before new credentials are created add in the user's id

        # TODO: uncomment the below code when front end for 3rd Party API is done
        # request.data['user'] = reverse('user-detail', kwargs={'pk': request.user.id})
        return super(APICredentialsView, self).create(request)

    # Get permissions for user
    @action(detail=False)
    def user_credentials(self, request):
        queryset = APICredentials.objects.filter(user__id=request.user.id)
        return Response(queryset.values())


# API endpoint that allows graphs to be viewed or edited
class GraphView(viewsets.ModelViewSet):
    # Authenticate the user
    permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Graph.objects.all()
    serializer_class = GraphSerializer

    def create(self, request, **kwargs):
        # Before the Graph object is created, fill in the user field
        request.data['user'] = reverse('user-detail', kwargs={'pk': request.user.id})
        return super(GraphView, self).create(request)

    # Get graphs for user
    @action(detail=False)
    def user_graphs(self, request):
        queryset = Graph.objects.filter(user__id=request.user.id)
        return Response(queryset.values())

    # Get graph data
    @action(detail=False, methods=['post'])
    def request_graph(self, request):
        data = json.loads(request.body)
        dataset1 = data['dataset1']
        field1 = data['field1']

        # Get the dataset api url
        url1 = Dataset.objects.filter(id=dataset1)[0].api_url
        field_name = Field.objects.filter(id=field1)[0].name
        # Get the data from this dataset
        data1 = fetch_data(url1, 'x', field_name)

        dataset2 = data['dataset2']
        field2 = data['field2']

        # Get the dataset api url
        url2 = Dataset.objects.filter(id=dataset2)[0].api_url
        field_name = Field.objects.filter(id=field2)[0].name
        # Get the data from this dataset
        data2 = fetch_data(url2, 'y', field_name)
        return Response(combine_data_list(data1, data2))


# API endpoint that allows datasets to be viewed or edited
class DashboardView(viewsets.ModelViewSet):
    # Authenticate the user
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer

    # def create(self, request, **kwargs):
    # Before the Dashboard object is created, fill in the user field
    # request.data['user'] = reverse('user-detail', kwargs={'pk': request.user.id})
    # return super(DashboardView, self).create(request)

    @action(detail=False)
    def get_dashboards(self, request):
        queryset = Dashboard.objects.filter(user__id=request.user.id)
        return Response(queryset.values())


# API endpoint that allows datasets to be viewed or edited
class ChartView(viewsets.ModelViewSet):
    # Authenticate the user
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer


# API endpoint that allows datasets to be viewed or edited
class ChartRankingView(viewsets.ModelViewSet):
    # Authenticate the user
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = ChartRanking.objects.all()
    serializer_class = ChartRankingSerializer


# API endpoint that allows Ask Clara queries to be viewed or edited
class AskClaraFeedView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = AskClaraFeed.objects.all()
    serializer_class = AskClaraFeedSerializer
    pagination_class = LimitOffsetPagination


# API endpoint that allows ideas to be viewed or edited
class PostView(viewsets.ModelViewSet):
    # Authenticate the user
    permission_classes = (IsAuthenticated,)

    def create(self, request, **kwargs):
        # Before the Graph object is created, fill in the user field
        request.data['user'] = reverse('user-detail', kwargs={'pk': request.user.id})
        return super(PostView, self).create(request)

    # Select all datasets
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# API endpoint that allows comments to be viewed or edited
class CommentView(viewsets.ModelViewSet):
    # Authenticate the user
    permission_classes = (IsAuthenticated,)

    # Get comments for post
    @action(detail=False, methods=['post'])
    def post_comments(self, request):
        data = json.loads(request.body)
        queryset = Comment.objects.filter(post=data['id'])
        return Response(queryset.values())

    def create(self, request, **kwargs):
        # Before the Graph object is created, fill in the user field
        request.data['user'] = reverse('user-detail', kwargs={'pk': request.user.id})
        return super(CommentView, self).create(request)

    # Select all datasets
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ARModelView(viewsets.ModelViewSet):
    queryset = ARModel.objects.all()
    serializer_class = ARModelSerializer

    @action(detail=False, methods=['post'])
    def generate_presigned_url(self, request):
        s3_client = boto3.client('s3')
        try:
            response = s3_client.generate_presigned_url(
                'put_object',
                Params={
                    'Bucket': 'clara-data-ar',
                    'Key': request.data['name'],
                    'ACL': 'public-read'
                }
            )
        except ClientError as e:
            print(e)
            return None

        # The response contains the presigned URL
        return Response(response)


class ARDataView(viewsets.ModelViewSet):
    queryset = ARData.objects.all()
    serializer_class = ARDataSerializer


# return list of {latitude, longitude, device ID} objects
# list will be used to add location pins to a map object
def map_pins(request):
    # TODO: Change this back to post after response is verifies
    if request.method == 'GET':
        # data = json.loads(request.body)
        # list of values to be returned
        ret_list = []
        # hard coded
        url = 'https://slv.prod03.ssn.ssnsgs.net:8443/reports'
        type = 'third_party'
        # TODO: test this after hard coding works
        # type = data.get('type')
        # url =  data.get('api_url')

        if type == 'third_party':
            # third party dataset

            # TODO: Think of ways to make this modular and not hard coded.
            # payload = {
            #    'latMin': '43.4513',
            #    'latMax': '43.4513',
            #    'lngMin': '80.4981',
            #    'lngMax': '80.4981',
            #    'maxDevices': '10',
            #    'ser': 'json'
            # }
            # kitchener geozone id: 5760
            payload = {
                'geozoneId': '5760',
                'recurse': 'true',
                'categoryStrId': 'streetlight',
                'ser': 'json'
            }

            url = 'https://slv.prod03.ssn.ssnsgs.net: 8443/reports/api/asset/getGeoZoneDevices?geoZoneId=6638&ser=json&slvSystemServiceRequestTime=1560523889116'
            device_list = requests.post(url, auth=('*****', '*****'))
            # device_list = requests.post(url + "/api/asset/getGeozoneDevices", data=payload, auth=('*****', '*****!'))
            # json_list = json.dumps(device_list.content.decode('utf8'))
            print(device_list.text)
            df_devices = pd.read_json(device_list.content.decode('utf8'))
            print(df_devices.columns)
            cols = ['lat', 'lng', 'id']
            df_devices = df_devices[cols]
            print(df_devices)
            return Response(df_devices.to_json(orient='records'))

        else:
            # arcGis dataset
            print("placeholder")
            return Response('nothing')

    else:
        return 'err'


def channels(request):
    return render(request, 'templates/api/channels.html')
