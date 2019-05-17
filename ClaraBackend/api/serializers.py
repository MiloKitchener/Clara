from rest_framework import serializers
from .models import Dataset, Field, Graph, User


class DatasetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dataset
        fields = '__all__'


class FieldSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Field
        fields = '__all__'


class GraphSerializer(serializers.HyperlinkedModelSerializer):
    # User field will be an id instead of a url because I struggled
    user = serializers.SlugRelatedField(
        queryset=User.objects.all(),
        slug_field='id'
    )

    class Meta:
        model = Graph
        fields = '__all__'

