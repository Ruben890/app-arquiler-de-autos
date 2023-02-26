from django.db import models
from .Choice import *


class guys_cars(models.Model):
    guys = models.CharField("guys car", max_length=200,
                            null=False, blank=True, unique=True)

    def __str__(self):
        return self.guys

    class Meta:
        ordering = ("guys",)


class year_cars(models.Model):
    year = models.IntegerField("year_cars", null=False,  blank=False),

    def __str__(self):
        return self.year




class brand_cars(models.Model):
    brand = models.CharField("brand_cars", max_length=150,
                             unique=True, blank=False, null=False)

    def __str__(self):
        return self.brand

    class Meta:
        ordering = ('brand',)


class cars (models.Model):
    brand = models.ForeignKey(
        brand_cars, on_delete=models.CASCADE, related_name="brand_car")
    year = models.ForeignKey(
        year_cars, on_delete=models.CASCADE, related_name="year_cars")
    image_car = models.ImageField(
        upload_to="image/cars", null=False, blank=False)
    availability = models.BooleanField("availability car", default=False)
    price = models.IntegerField("price car", blank=False, null=False)
    data = models.DateField("data car", auto_now_add=True, null=True)
    Gearbox = models.CharField(
        "Gearbox car", max_length=150, null=False, blank=False, choices=Gearbox)
    Passenger_Capacity = models.IntegerField(
        "Passenger Capacity", null=False, blank=False,)
    guys = models.ForeignKey(guys_cars, on_delete=models.CASCADE,
                             blank=False, null=False, related_name="guys_cars")
    Maximum_Baggage = models.IntegerField(
        "Maximum Baggage", null=False, blank=False)
    Fuel = models.CharField(max_length=150, null=False,
                            blank=False, choices=fuel_type_cars)

    def __str__(self):
        return f"{self.brand}:{self.model}"

    class Meta:
        ordering = ("data",)
        verbose_name = ("Car")
        verbose_name_plural = ("Cars")
