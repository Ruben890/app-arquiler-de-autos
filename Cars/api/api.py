from rest_framework import viewsets
from .serializers import CarSerializer


class ViewCars(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta().model.objects.all()
