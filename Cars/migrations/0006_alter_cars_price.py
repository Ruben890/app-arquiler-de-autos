# Generated by Django 4.1.7 on 2023-02-26 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Cars", "0005_remove_cars_model_cars_fuel_cars_gearbox_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cars",
            name="price",
            field=models.IntegerField(verbose_name="price_cars"),
        ),
    ]
