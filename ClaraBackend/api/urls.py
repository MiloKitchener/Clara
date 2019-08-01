from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from . import views
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register(r'datasets', views.DatasetView, base_name='dataset')
routers.register(r'fields', views.FieldView)
routers.register(r'users', views.UserView)
routers.register(r'permission', views.PermissionView)
routers.register(r'graphs', views.GraphView)
routers.register(r'dashboards', views.DashboardView)
routers.register(r'charts', views.ChartView)
routers.register(r'chart_ranking', views.ChartRankingView)
routers.register(r'ask_clara_feed', views.AskClaraFeedView)
routers.register(r'posts', views.PostView)
routers.register(r'comments', views.CommentView)
routers.register(r'APICredentials', views.APICredentialsView)


urlpatterns = [
    path(r'', include(routers.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', views.signup, name='signup'),
    path('create/datasets', views.DatasetCreateView.as_view(), name='create_datasets'),
    path('map/datasets', views.DatasetMapView.as_view(), name='map_datasets'),
    path('pins/', views.map_pins, name='map_pins'),
    path(r'channels/', views.channels, name='channels'),

]
