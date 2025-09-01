from django.contrib import admin

from .models import User,SuperHost

admin.site.register(User)
admin.site.register(SuperHost)