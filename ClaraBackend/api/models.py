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


class Field(models.Model):
    name = models.CharField(max_length=255, null=False)
    normalized_name = models.CharField(max_length=255, null=True)
    alias = models.CharField(max_length=255, null=False, default="default")
    type = models.CharField(max_length=255, null=False, default="esriFieldTypeString")
    dataset = models.ForeignKey(Dataset, related_name='fields', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    # Add additional fields in here
    def __str__(self):
        return self.email
