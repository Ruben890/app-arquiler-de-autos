from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import *
from ..models import *
from rest_framework.exceptions import AuthenticationFailed


class ViewCars(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta().model.objects.all()


class ViewYear(viewsets.GenericViewSet):
    serializer_class = YearCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            year_cars_queryset = year_cars.objects.all()
            serializer = YearCarSerializer(year_cars_queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ViewBranch(viewsets.GenericViewSet):
    serializer_class = BrandCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            branch_cars_queryset = brand_cars.objects.all()
            serializers = BrandCarSerializer(branch_cars_queryset, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ViewGuy(viewsets.GenericViewSet):
    serializer_class = GuyCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            guy_cars_queryset = guys_cars.objects.all()
            serializers = GuyCarSerializer(guy_cars_queryset, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class verifications_authentication_viewset(viewsets.GenericViewSet):
    def create(self, request):
        token = request.COOKIES.get('create_auth_token')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
