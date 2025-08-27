from django.contrib import admin
from .models import ShopOwnerProfile, Shop, ShopCategory, ProductCategory, Product, CustomerProfile

admin.site.register(ShopOwnerProfile)
admin.site.register(Shop)
admin.site.register(ShopCategory)
admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(CustomerProfile)
