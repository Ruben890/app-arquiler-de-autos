# Generated by Django 4.1.7 on 2023-03-19 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Cars", "0014_alter_year_cars_year"),
    ]

    operations = [
        migrations.AlterField(
            model_name="cars",
            name="price",
            field=models.DecimalField(
                decimal_places=2, max_digits=5, verbose_name="price car"
            ),
        ),
    ]
