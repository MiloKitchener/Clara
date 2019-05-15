from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser, Dataset, Field
from .serializers import DatasetSerializer, FieldSerializer
from django.views.decorators.csrf import csrf_exempt
from .forms import CustomUserCreationForm
from rest_framework import viewsets
import json
from .dal import fetch_data, combine_data_list, create_datasets
from rest_framework.decorators import action

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
            user = CustomUser.objects.create_user(username=data.get('username'), email=data.get('email'),
                                                  password=data.get('password1'))
            return HttpResponse("sucess")
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


# API endpoint that allows fields to be viewed or edited
class FieldView(viewsets.ModelViewSet):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Field.objects.all()
    serializer_class = FieldSerializer


class GraphView(APIView):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        data = json.loads(request.body)
        dataset1 = data.get('dataset1', '')
        field1 = data.get('field1', '')

        # Get the dataset api url
        queryset = Dataset.objects.filter(name=dataset1)
        url1 = queryset[0].api_url

        # Get the data from this dataset
        data1 = fetch_data(url1, 'x', field1)

        dataset2 = data.get('dataset2', '')
        field2 = data.get('field2', '')

        # Get the dataset api url
        queryset = Dataset.objects.filter(name=dataset2)
        url2 = queryset[0].api_url

        # Get the data from this dataset
        data2 = fetch_data(url2, 'y', field2)
        return Response(combine_data_list(data1, data2))
