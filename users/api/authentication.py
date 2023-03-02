from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime


def create_auth_token(id):
    return jwt.encode(payload={
         # ?User Identifier ID
            "id":  id,
            # ? Useful life of Token
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=30),
            # ? time in which the token was created
            "iat": datetime.datetime.utcnow()},
                      key='access_secret', algorithm='HS256')


