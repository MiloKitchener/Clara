#Clara Backend
This section of the porject contains all the information about deploying
and developing with the Clara backend.
##Setup
###Database
####Local Database
Navigate to the root of Clara backend and run the following
lines to populate your database with the required tables

```
python manage.py makemigrations
python manage.py migrate
```
###Users
Create a superuser by using the following command and
following the prompts it gives

`python manage.py createsuperuser`
