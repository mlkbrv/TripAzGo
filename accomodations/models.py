from django.utils import timezone
from django.db import models
from users.models import User, CityAndCountry
from users.validators import validate_file_type
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class Locations(models.Model):
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f'{self.latitude}, {self.longitude}'


class Amenity(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='amenities/', null=True, blank=True)

    def __str__(self):
        return f'{self.name}'


class Accommodation(models.Model):
    title = models.CharField(blank=True, null=True, max_length=100)
    description = models.TextField(blank=True, null=True)

    location = models.ForeignKey(Locations, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    is_available = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)

    number_of_guests = models.IntegerField(default=0)
    number_of_bedrooms = models.IntegerField(default=0)
    number_of_bathrooms = models.IntegerField(default=0)
    number_of_beds = models.IntegerField(default=0)

    check_in = models.DateField(blank=True, null=True)
    check_out = models.DateField(blank=True, null=True)

    price_per_night = models.FloatField(blank=True, null=True)

    service_fee = models.FloatField(blank=True, null=True)

    created_at = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.is_verified and not self.created_at:
            self.created_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.title}'


class AccommodationFile(models.Model):
    accommodation = models.ForeignKey(Accommodation, on_delete=models.CASCADE)
    file = models.FileField(upload_to='accommodations_files/', null=True, blank=True, validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.accommodation.title}'


class Booking(models.Model):
    accommodation = models.ForeignKey(Accommodation, on_delete=models.CASCADE)
    checked_in = models.DateField(blank=True, null=True)
    checked_out = models.DateField(blank=True, null=True)

    def clean(self):
        if self.checked_in and self.accommodation.check_in:
            if self.checked_in < self.accommodation.check_in:
                raise ValidationError({
                    'checked_in': _(f"The check-in date must be no earlier than {self.accommodation.check_in}.")
                })

        if self.checked_out and self.accommodation.check_out:
            if self.checked_out > self.accommodation.check_out:
                raise ValidationError({
                    'checked_out': _(f"The departure date must be no later than {self.accommodation.check_out}.")
                })

        if self.checked_in and self.checked_out:
            if self.checked_in >= self.checked_out:
                raise ValidationError(_("The check-out date must be later than the check-in date.."))

    def __str__(self):
        return f"Booking: {self.accommodation.title} ({self.checked_in} - {self.checked_out})"
