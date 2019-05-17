from django.contrib import admin
from .models import Dataset
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ['email', 'username', ]


admin.site.register(User, CustomUserAdmin)
admin.site.register(Dataset)
