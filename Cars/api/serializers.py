from rest_framework import serializers
from ..models import cars


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = cars
        fields = "__all__"
