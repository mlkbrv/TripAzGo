from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from market.models import validate_file_type
from users.models import User
import datetime


class DriverProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_verified = models.BooleanField(default=False)
    driving_license = models.CharField(max_length=120)

    def __str__(self):
        return self.user.get_full_name()


class Brand(models.Model):
    name = models.CharField(max_length=120)
    country = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class CarType(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class CarFile(models.Model):
    car = models.ForeignKey("Car", related_name="car_files", on_delete=models.CASCADE)
    file = models.FileField(upload_to="cars_files/", validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file.name} ({self.car.id})"


class Car(models.Model):
    owner = models.ForeignKey(DriverProfile, on_delete=models.CASCADE, related_name="cars")
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    model = models.CharField(max_length=120)
    car_type = models.ForeignKey(CarType, on_delete=models.CASCADE)
    year = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1900), MaxValueValidator(datetime.datetime.now().year)])
    color = models.CharField(max_length=120)
    fuel = models.CharField(
        max_length=10,
        choices=[
            ('petrol', 'Petrol'),
            ('diesel', 'Diesel'),
            ('gas', 'Gaz'),
            ('electric', 'Electric'),
            ('hybrid', 'Hybrid'),
        ],
        default='petrol',
    )
    is_verified = models.BooleanField(default=False)
    status = models.CharField(
        max_length=20,
        choices=[
            ('available', 'Available'),
            ('in_use', 'InUse'),
            ('booked', 'Booked'),
            ('na', 'NotAvailable'),
        ]
    )
    price = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"
