from django.core.exceptions import ValidationError
from django.db import models

def validate_file_type(value):
    valid_mime_types = ['image/jpeg', 'image/png', 'video/mp4']
    if value.file.content_type not in valid_mime_types:
        raise ValidationError("Only JPG, PNG or MP4 files are allowed.")

class ShopCategory(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)
    def __str__(self):
        return self.name

class Shop(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)
    category = models.ForeignKey(ShopCategory,on_delete=models.CASCADE)
    description = models.TextField(blank=True,null=True)
    site = models.URLField(blank=True,null=True)
    address = models.URLField(blank=True,null=True)
    is_verified = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class ProductCategory(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE)
    description = models.TextField(blank=True,null=True)
    shop = models.ForeignKey(Shop,on_delete=models.CASCADE)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class ShopFile(models.Model):
    shop = models.ForeignKey(Shop, related_name="shop_files", on_delete=models.CASCADE)
    file = models.FileField(upload_to="shops_files/",validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file.name} ({self.shop.name})"

class ProductFile(models.Model):
    shop = models.ForeignKey(Shop, related_name="product_files", on_delete=models.CASCADE)
    file = models.FileField(upload_to="product_files/",validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file.name} ({self.shop.name})"