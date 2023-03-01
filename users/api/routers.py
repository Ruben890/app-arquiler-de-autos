from rest_framework.routers import DefaultRouter
from .api import Register, Login, UsersViw

routers = DefaultRouter()

routers.register(r"Register", Register, basename="Register")
routers.register(r'Login', Login, basename="Login")
routers.register(r'listUsers', UsersViw, basename="listUsers")
urlpatterns = routers.urls
