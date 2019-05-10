from django.db import models
from django.contrib.auth.models import AbstractUser

<<<<<<< HEAD

class Dataset(models.Model):
    name = models.CharField(max_length=255, null=False)
    desc = models.CharField(max_length=255, null=False)
    api_url = models.CharField(max_length=255, null=False)
    datetime_updated = models.DateTimeField(max_length=255, null=False)


class CustomUser(AbstractUser):
    # add additional fields in here
    def __str__(self): # tutorial code
        return self.email # tutorial code
=======
# Create your models here.
>>>>>>> parent of 8a41d7f1... Working on dataset fetching and listing
