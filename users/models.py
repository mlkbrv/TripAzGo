from .validators import validate_password
from django.utils import timezone
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, UserManager, AbstractUser
from django.core.exceptions import ValidationError
from django.db import models, transaction
from phonenumber_field.modelfields import PhoneNumberField

class CityAndCountry(models.Model):
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.city} - {self.country}"


class Language(models.Model):
    language = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.language}"


class CustomUserManager(UserManager):
    @transaction.atomic
    def _create(self, email, password, **extra):
        email = self.normalize_email(email)
        validate_password(password)
        user = self.model(email=email, **extra)
        user.set_password(password)
        user.full_clean()
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra):
        if not email:
            raise ValueError("Email обязателен.")
        if not password:
            raise ValidationError("Password")
        extra.setdefault("is_staff", False)
        extra.setdefault("is_superuser", False)
        return self._create(email, password, **extra)

    def create_superuser(self, email, password=None, **extra):
        extra.setdefault("is_staff", True)
        extra.setdefault("is_superuser", True)
        if extra.get("is_staff") is not True or extra.get("is_superuser") is not True:
            raise ValueError("Суперпользователь должен иметь is_staff=True и is_superuser=True.")
        return self._create(email, password, **extra)


class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    phone = PhoneNumberField(null=True, blank=True, unique=True)
    display_name = models.CharField(max_length=255, null=True, blank=True)
    real_name = models.CharField(max_length=255, null=True, blank=True)

    bio = models.TextField(null=True, blank=True)
    lives_in = models.ForeignKey(CityAndCountry, on_delete=models.PROTECT, null=True, blank=True)
    languages = models.ManyToManyField(Language, blank=True)

    website = models.URLField(null=True, blank=True)

    twitter = models.URLField(null=True, blank=True)
    facebook = models.URLField(null=True, blank=True)
    instagram = models.URLField(null=True, blank=True)

    profile_pic = models.ImageField(upload_to="users/profile_pics/", null=True, blank=True)
    cover = models.ImageField(upload_to="users/covers", null=True, blank=True)

    member_since = models.DateTimeField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)

    is_superhost = models.BooleanField(default=False)
    is_tourguide = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def save(self, *args, **kwargs):
        if self.is_verified and self.member_since is None:
            self.member_since = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.real_name or self.email

class SuperHost(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.user.real_name or self.user.email

class TourGuide(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.user.real_name or self.user.email