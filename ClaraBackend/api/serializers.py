from rest_framework import serializers
from .models import *
from django.contrib.auth.models import Permission


class DatasetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dataset
        fields = '__all__'

class FieldSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Field
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'first_name', 'last_name')


class PermissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Permission


class GraphSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Graph
        fields = '__all__'


class AskClaraFeedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AskClaraFeed
        fields = '__all__'


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'url', 'num_votes', 'user', 'description', 'tag', 'title')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'url', 'comment', 'user', 'post')

class APICredentialsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = APICredentials
        fields = '__all__'