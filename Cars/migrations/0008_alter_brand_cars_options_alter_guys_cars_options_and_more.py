# Generated by Django 4.1.7 on 2023-02-26 23:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("Cars", "0007_guys_cars_alter_cars_gearbox_alter_cars_availability_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="brand_cars",
            options={"ordering": ("brand",)},
        ),
        migrations.AlterModelOptions(
            name="guys_cars",
            options={"ordering": ("guys",)},
        ),
        migrations.RemoveField(
            model_name="brand_cars",
            name="data",
        ),
        migrations.AddField(
            model_name="cars",
            name="Maximum_Baggage",
            field=models.ImageField(
                default=1, upload_to="", verbose_name="Maximum Baggage"
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="cars",
            name="Gearbox",
            field=models.CharField(
                choices=[("automatic", "automatic"), ("mechanics", "mechanics")],
                max_length=150,
                verbose_name="Gearbox car",
            ),
        ),
        migrations.AlterField(
            model_name="cars",
            name="Passenger_Capacity",
            field=models.IntegerField(verbose_name="Passenger Capacity"),
        ),
        migrations.AlterField(
            model_name="cars",
            name="availability",
            field=models.BooleanField(default=False, verbose_name="availability car"),
        ),
        migrations.AlterField(
            model_name="cars",
            name="data",
            field=models.DateField(
                auto_now_add=True, null=True, verbose_name="data car"
            ),
        ),
        migrations.AlterField(
            model_name="cars",
            name="guys",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="guys_cars",
                to="Cars.guys_cars",
            ),
        ),
        migrations.AlterField(
            model_name="cars",
            name="price",
            field=models.IntegerField(verbose_name="price car"),
        ),
        migrations.AlterField(
            model_name="cars",
            name="year",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="year_cars",
                to="Cars.year_cars",
            ),
        ),
    ]
