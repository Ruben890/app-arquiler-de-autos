# Generated by Django 4.1.7 on 2023-02-27 00:08

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Cars", "0010_cars_model"),
    ]

    operations = [
        migrations.AddField(
            model_name="year_cars",
            name="year",
            field=models.PositiveIntegerField(
                default=1,
                unique=True,
                validators=[django.core.validators.MinValueValidator(2015)],
                verbose_name="year_cars",
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="cars",
            name="Maximum_Baggage",
            field=models.PositiveIntegerField(verbose_name="Maximum Baggage"),
        ),
        migrations.AlterField(
            model_name="cars",
            name="Passenger_Capacity",
            field=models.PositiveIntegerField(verbose_name="Passenger Capacity"),
        ),
        migrations.AlterField(
            model_name="cars",
            name="price",
            field=models.PositiveIntegerField(verbose_name="price car"),
        ),
    ]