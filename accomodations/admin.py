from django.contrib import admin
from .models import Amenity, Accommodation, AccommodationFile, CityAndCountry, Locations, Booking

admin.site.register(Amenity)
admin.site.register(Accommodation)
admin.site.register(AccommodationFile)
admin.site.register(CityAndCountry)
admin.site.register(Locations)
admin.site.register(Booking)
