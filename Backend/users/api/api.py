from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
import jwt
from .authentication import create_auth_token
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
            raise AuthenticationFailed("email is invalid")

        # ?confirm if the password is correct
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password")
        # ?generic token
        access_token = create_auth_token(user.id)
        # ? configuration cookie
        response = Response()
        response.set_cookie(key='create_auth_token',
                            value=access_token, httponly=True)

        response.data = {
            "http": status.HTTP_200_OK,
            "message": "login Successful"
        }
        return response


class UsersViw(viewsets.GenericViewSet):
    serializer_class = ProfilesSerializer

    def list(self, request):
        # ? verifying cookie token
        token = request.COOKIES.get('create_auth_token')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'access_secret', algorithms=['HS256'])
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
        response.delete_cookie('create_auth_token')
        response.data = {
            "message": "logout Successfully"
        }

        return response
