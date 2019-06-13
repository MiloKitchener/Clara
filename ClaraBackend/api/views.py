from django.shortcuts import render
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from .forms import CustomUserCreationForm
from rest_framework import viewsets
from .dal import *
from rest_framework.decorators import action
from rest_framework.reverse import reverse
import requests
import pandas as pd

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

    # Select all datasets
    queryset = Dataset.objects.all().order_by('name')
    serializer_class = DatasetSerializer

    # Get fields for dataset
    @action(detail=True)
    def field_names(self, pk=None):
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
        map_fields_to_normalized_name(url)
        return Response('success')

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
        queryset = Dataset.objects.filter(name=dataset1)
        url1 = queryset[0].api_url

        # Get the data from this dataset
        data1 = fetch_data(url1, 'x', field1)

        dataset2 = data['dataset2']
        field2 = data['field2']

        # Get the dataset api url
        queryset = Dataset.objects.filter(name=dataset2)
        url2 = queryset[0].api_url

        # Get the data from this dataset
        data2 = fetch_data(url2, 'y', field2)
        return Response(combine_data_list(data1, data2))


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
        #type = data.get('type')
        #url =  data.get('api_url')

        if type == 'third_party':
            # third party dataset

            # TODO: Think of ways to make this modular and not hard coded.
            payload = {
                'geozoneId': '5760',
                'recurse': 'true',
                'categoryStrId': 'streetlight',
                'ser': 'json'
            }
            device_list = requests.post(url + "/api/asset/getGeozoneDevices", data=payload, auth=('kallenmuncey', '81l0fTh3Inn0v8t1on!'))
            # json_list = json.dumps(device_list.content.decode('utf8'))
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
