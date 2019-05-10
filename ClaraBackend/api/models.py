from django.db import models


class Dataset(models.Model):
    name = models.CharField(max_length=255, null=False)
    desc = models.CharField(max_length=255, null=False)
    api_url = models.CharField(max_length=255, null=False)
    datetime_updated = models.DateTimeField(max_length=255, null=False)
