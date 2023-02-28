from rest_framework.routers import DefaultRouter
from .api import Register, Login

routers = DefaultRouter()

routers.register(r"Register", Register, basename="Register")
routers.register(r'Login', Login, basename="Login")
urlpatterns = routers.urls
