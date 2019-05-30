from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import views
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register(r'datasets', views.DatasetView)
routers.register(r'fields', views.FieldView)
routers.register(r'graphs', views.GraphView)
routers.register(r'ask_clara_feed', views.AskClaraFeedView)

urlpatterns = [
    path(r'', include(routers.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', views.signup, name='signup'),
    path('create/datasets', views.DatasetCreateView.as_view(), name='create_datasets'),

]
