from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Dataset
from .serializers import DatasetSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
from .forms import CustomUserCreationForm
import json


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data.get('username'))
        if not (data.get('username')) or (not data.get('email') or (not data.get('password1'))):
            # not a valid user, no user will be created. data will return
            print('user invalid, user not created')
            # will return user to the sign up page to try again
            # CHANGE THIS TO BE DYNAMIC AND NOT A LINK EXCLUSIVE TO LOCAL INSTANCES
            return HttpResponse("err")
        else:
            # user is valid and created
            print('valid user is created')
            user = CustomUser.objects.create_user(username=data.get('username'), email=data.get('email'), password=data.get('password1'))
            return HttpResponse("sucess")
    else:
        form = CustomUserCreationForm()


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self):
        content = {'message': 'Hello, World!'}
        return Response(content)


class ListDatasetView(generics.ListAPIView):
    # Authenticate the user
    # TODO: Re-enable authentication
    # permission_classes = (IsAuthenticated,)

    # Select all datasets
    queryset = Dataset.objects.all()
    serializer_class = DatasetSerializer


def graph(request):
    dataset1 = request.POST.get('dataset1', '')
    field1 = request.POST.get('field1', '')
    dataset2 = request.POST.get('dataset2', '')
    field2 = request.POST.get('field2', '')
