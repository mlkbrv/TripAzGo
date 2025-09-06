from django.db import models
from users.models import User, TourGuide, Language, CityAndCountry
from accomodations.models import Locations


class WhatIsIncluded(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to='whatisincluded/', null=True, blank=True)

    def __str__(self):
        return self.name


class Tour(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    locations = models.ForeignKey(Locations, on_delete=models.CASCADE,blank=True, null=True)
    hosted_by = models.ForeignKey(TourGuide, on_delete=models.CASCADE, blank=True, null=True)

    city = models.ForeignKey(CityAndCountry, on_delete=models.CASCADE, blank=True, null=True)

    is_available = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)

    what_is_included = models.ManyToManyField(WhatIsIncluded, blank=True)

    duration_in_hours = models.PositiveSmallIntegerField(default=0)

    hosted_languages = models.ManyToManyField(Language, blank=True)

    def __str__(self):
        return self.title