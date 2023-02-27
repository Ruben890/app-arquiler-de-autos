from rest_framework import serializers
from ..models import cars, year_cars, brand_cars, guys_cars


class YearCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = year_cars
        fields = "__all__"


class BrandCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = brand_cars
        fields = "__all__"


class GuyCarSerializer(serializers.ModelSerializer):
    class Meta:
        model = guys_cars
        fields = "__all__"


class CarSerializer(serializers.ModelSerializer):
    year = YearCarSerializer()
    guys = GuyCarSerializer()
    brand = BrandCarSerializer()

    class Meta:
        model = cars
        fields = "__all__"
