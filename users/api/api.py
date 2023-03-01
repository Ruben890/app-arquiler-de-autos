from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed

import jwt
import datetime
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

        # ? Useful load
        payload = {
            "id":  user.id,  # * User Identifier ID
            # * Useful life of Token
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()  # * time in which the token was created
        }
        # ?generic token
        token = jwt.encode(payload=payload, key='secret', algorithm="HS256")
        # ? configuration cookie
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)

        response.data = {
            "http": 200,
            "message": "login Successful",
            "jwt": token
        }
        return response


class UsersViw(viewsets.GenericViewSet):

    def list(self, request):
        # ? verifying cookie token
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        # ? filtering the user who owns the token using the id
        user = Profiles.objects.filter(id=payload['id']).first()
        serializer = ProfilesSerializer(user)
        # ? response to Users who own the token
        return Response(serializer.data)


class Logout(viewsets.GenericViewSet):
    # ? delete the cookie
    def create(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            "message": "logout Successfully"
        }

        return response
