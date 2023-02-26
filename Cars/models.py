from django.db import models


class model_cards(models.Model):
    model = models.CharField("model_cars", max_length=150,
                             unique=True, blank=False, null=False)
    data = models.DateTimeField(
        "data_time_models_cars",  auto_now_add=True, null=False)

    def __str__(self):
        return self.model

    class Meta:
        ordering = ("data",)


class year_cars(models.Model):
    year = models.ImageField("year_cars", null=False,  blank=False),

    def __str__(self):
        return self.year


class brand_cars(models.Model):
    brand = models.CharField("brand_cars", max_length=150,
                             unique=True, blank=False, null=False)
    data = models.DateField("data_time_brand_cars",
                            auto_now_add=True, null=False)

    def __str__(self):
        return self.brand

    class Meta:
        ordering = ("data",)


class cars (models.Model):
    brand = models.ForeignKey(brand_cars, models.CASCADE, related_name="brand_cars")
    model = models.ForeignKey(model_cards, models.CASCADE, related_name="model_cards")
    image_car = models.ImageField(upload_to="image/cars", null=False, blank=False)
    data = models.DateField("data_cars",auto_now_add=True, null=True)
    def __str__(self):
        return f"{self.brand}:{self.model}"
    
    class Meta:
        ordering = ("data",)
        verbose_name = ("Car")
        verbose_name_plural = ("Cars")