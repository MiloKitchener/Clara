from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect

from .forms import CustomUserCreationForm

def signup(request):
    print("in view")
    if request.method == 'POST':
        print("post")
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/login/")
    else:
        print(request.method)
        form = CustomUserCreationForm()
        return HttpResponseRedirect("/login/")



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
