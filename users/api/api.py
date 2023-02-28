from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProfilesSerializer
from users.models import Profiles


class Register(viewsets.GenericViewSet):
    serializer_class = ProfilesSerializer
    ###?Method to POST to Profiles
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        