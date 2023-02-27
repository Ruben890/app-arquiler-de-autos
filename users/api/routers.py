from rest_framework.routers import DefaultRouter
from .api import ListUsers

routers = DefaultRouter()

routers.register(r"", ListUsers, basename="Users")
urlpatterns = routers.urls
