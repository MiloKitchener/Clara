from rest_framework import serializers
from .models import *
from django.contrib.auth.models import Permission


class DatasetSerializer(serializers.ModelSerializer):
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


class ChartRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartRanking
        fields = ['ranking', 'chart', 'dashboard']


class ChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chart
        fields = ['id', 'name', 'dashboard', 'type', 'dataset1', 'field1', 'dataset2', 'field2']


class DashboardSerializer(serializers.ModelSerializer):
    charts = ChartSerializer(many=True)

    class Meta:
        model = Dashboard
        fields = ['id', 'user', 'name', 'charts', 'desc']

    def create(self, validated_data):
        charts = validated_data.pop('charts')
        dashboard = Dashboard.objects.create(**validated_data)
        for chart in charts:
            Chart.objects.create(dashboard=dashboard, **chart)
        return dashboard


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


class ARModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ARModel
        fields = '__all__'


class ARDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ARData
        fields = '__all__'
