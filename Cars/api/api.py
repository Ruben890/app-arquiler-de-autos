from rest_framework import viewsets
from .serializers import CarSerializer, BrandCarSerializer, YearCarSerializer, GuyCarSerializer


class ViewCars(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta().model.objects.all()


class ViewYear(viewsets.ModelViewSet):
    serializer_class = YearCarSerializer
    queryset = YearCarSerializer.Meta().model.objects.all()


class ViewBranch(viewsets.ModelViewSet):
    serializer_class = BrandCarSerializer
    queryset = BrandCarSerializer.Meta().model.objects.all()


class ViewGuy(viewsets.ModelViewSet):
    serializer_class = GuyCarSerializer
    queryset = GuyCarSerializer.Meta().model.objects.all()
