from django.http import HttpResponseRedirect, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
import json

from .forms import CustomUserCreationForm

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

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


def login_view(request):
    user = auth.authenticate(username=request.POST.get('password', ''), password=request.POST.get('username', ''))
    if user is not None and user.is_active:
        # Correct password, and the user is marked "active"
        auth.login(request, user)
    else:
        # Show an error page
        return HttpResponseRedirect("/api/invalid/")
