from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser, Dataset


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomUser
        # fields = ('username', 'email')
        # if issues return to password1 and password2 format
        fields = ('username', 'email', 'password1')


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email')


# Unsure if needed for this project.
# This section is needed to allow the user to input additional datasets from the front end
class DatasetForm(ModelForm):
    model = Dataset
    fields = ('name', 'desc', 'api_url', 'datetime_updated')