from django.contrib import admin
<<<<<<< HEAD
from .models import Dataset
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Dataset)
=======

# Register your models here.
>>>>>>> parent of 8a41d7f1... Working on dataset fetching and listing
