from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed

import jwt, datetime
from .serializers import ProfilesSerializer, Login
from users.models import Profiles
  

class Register(viewsets.GenericViewSet):
    model = Profiles
    serializer_class = ProfilesSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class Login(viewsets.GenericViewSet):
    model = Profiles
    serializer_class = Login

    def create(self, request):

        email = request.data['email']
        password = request.data['password']

        user = Profiles.objects.filter(email=email).first()
        # ?confirm if the email is correct
        if user is None:
            raise AuthenticationFailed("Users not found")

        # ?confirm if the password is correct
        if not user.check_password(password):
            raise AuthenticationFailed("Users password is incorrect")
        
        ###? Useful load
        payload  = {
            "id":  user.id, ###* User Identifier ID
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),###* Useful life of Token
            "lat": datetime.datetime.utcnow() ###* time in which the token was created
        }

        return Response({
            "http": 200, 
            "message": "login Successful",
            
        })
