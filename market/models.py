from django.core.exceptions import ValidationError
from django.db import models
from users.models import User


def validate_file_type(value):
    valid_mime_types = ['image/jpeg', 'image/png', 'video/mp4']
    if value.file.content_type not in valid_mime_types:
        raise ValidationError("Only JPG, PNG or MP4 files are allowed.")


class ShopOwnerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_verified = models.BooleanField(default=False)
    document = models.FileField(upload_to="shops_owner/", validators=[validate_file_type])

    def __str__(self):
        return f"{self.user.get_full_name()}"


class CustomerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_blocked = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.get_full_name()}"


class ShopCategory(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.name


class Shop(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    category = models.ForeignKey(ShopCategory, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    owner = models.ForeignKey(ShopOwnerProfile, on_delete=models.CASCADE, related_name="shops")
    site = models.URLField(blank=True, null=True)
    address = models.CharField(blank=False, null=False, max_length=100)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True, blank=True,
        related_name="subcategories"
    )

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    shops = models.ManyToManyField("Shop", related_name="products")
    is_verified = models.BooleanField(default=False)
    version = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name


class ShopFile(models.Model):
    shop = models.ForeignKey(Shop, related_name="shop_files", on_delete=models.CASCADE)
    file = models.FileField(upload_to="shops_files/", validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file.name} ({self.shop.name})"


class ProductFile(models.Model):
    product = models.ForeignKey(Product, related_name="product_files", on_delete=models.CASCADE)
    file = models.FileField(upload_to="product_files/", validators=[validate_file_type])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file.name} ({self.product.name})"
