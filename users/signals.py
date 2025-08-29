from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User,SuperHost

@receiver(post_save, sender=User)
def create_superhost(sender, instance, created, **kwargs):
    if instance.is_superhost:
        SuperHost.objects.get_or_create(user=instance)