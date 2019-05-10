from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Dataset
from .serializers import DatasetSerializer


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
