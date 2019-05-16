from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import views
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register('datasets', views.DatasetView)
routers.register('fields', views.FieldView)
routers.register('graphs', views.GraphView)

urlpatterns = [
    path('', include(routers.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', views.signup, name='signup'),
    path('graph/', views.GraphRequestView.as_view(), name='graph'),
    path('create/datasets', views.DatasetCreateView.as_view(), name='create_datasets'),

]
