from rest_framework.routers import DefaultRouter
from .api import Register

routers = DefaultRouter()

routers.register(r"Register", Register, basename="Register")
urlpatterns = routers.urls
