from rest_framework.routers import DefaultRouter
from .api import Register, Login, UsersViw, Logout

routers = DefaultRouter()

routers.register(r"Register", Register, basename="Register")
routers.register(r'Login', Login, basename="Login")
routers.register(r'listUsers', UsersViw, basename="listUsers")
routers.register(r'logout', Logout, basename="logout")
urlpatterns = routers.urls
