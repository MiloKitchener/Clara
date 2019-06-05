import datetime as datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


class Dataset(models.Model):
    name = models.CharField(max_length=255, null=False)
    desc = models.CharField(max_length=255, null=False)
    api_url = models.CharField(max_length=255, null=False)
    parent_url = models.CharField(max_length=255, null=True)
    type = models.CharField(max_length=255, null=True)
    datetime_updated = models.DateTimeField(max_length=255, null=False)

    def __str__(self):
        return self.name

class APICredentials(models.Model):
    api_url = models.CharField(max_length=255, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255, null=False)
    password = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.api_url



class Field(models.Model):
    name = models.CharField(max_length=255, null=False)
    normalized_name = models.CharField(max_length=255, null=True)
    alias = models.CharField(max_length=255, null=False, default="default")
    type = models.CharField(max_length=255, null=False, default="esriFieldTypeString")
    dataset = models.ForeignKey(Dataset, related_name='fields', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class User(AbstractUser):
    # Add additional fields in here
    def __str__(self):
        return self.username


class Graph(models.Model):
    name = models.CharField(max_length=255, null=False)
    user = models.ForeignKey(User, related_name='graphs', on_delete=models.CASCADE)
    dataset1 = models.CharField(max_length=255, null=False)
    field1 = models.CharField(max_length=255, null=False)
    dataset2 = models.CharField(max_length=255, null=False)
    field2 = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.name


class AskClaraFeed(models.Model):
    response = models.CharField(max_length=255, null=False)
    datetime = models.DateTimeField(default=datetime.datetime.now(), null=True)

    def __str__(self):
        return self.response


class Post(models.Model):
    title = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, null=False)
    num_votes = models.IntegerField(null=False, default=0)
    user = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    tag = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    comment = models.CharField(max_length=255, null=False)
    user = models.ForeignKey(User, related_name='comments', default=1, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
