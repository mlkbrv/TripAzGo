from django.contrib import admin
from .models import Car,CarFile,CarType,DriverProfile,Brand

admin.site.register(Car)
admin.site.register(CarFile)
admin.site.register(CarType)
admin.site.register(DriverProfile)
admin.site.register(Brand)
