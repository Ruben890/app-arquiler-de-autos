from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProfilesSerializer
from users.models import Profiles


class ListUsers(viewsets.ModelViewSet):
    serializer_class = ProfilesSerializer
    queryset = ProfilesSerializer.Meta.model.objects.all()
