# Generated by Django 2.2.1 on 2019-06-06 15:14

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='askclarafeed',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2019, 6, 6, 11, 14, 31, 78886), null=True),
        ),
        migrations.AlterField(
            model_name='graph',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='graphs', to=settings.AUTH_USER_MODEL),
        ),
#            migrations.CreateModel(
#            name='Post',
#            fields=[
#                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
#                ('title', models.CharField(max_length=255)),
#                ('description', models.CharField(max_length=255)),
#                ('num_votes', models.IntegerField(default=0)),
#                ('tag', models.CharField(max_length=255, null=True)),
#                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to=settings.AUTH_USER_MODEL)),
#            ],
#        ),
#        migrations.CreateModel(
#            name='Comment',
#            fields=[
#                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
#                ('comment', models.CharField(max_length=255)),
#                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Post')),
#                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL)),
#            ],
#        ),
        migrations.CreateModel(
            name='APICredentials',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('api_url', models.CharField(max_length=255)),
                ('username', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='APICredentials', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]