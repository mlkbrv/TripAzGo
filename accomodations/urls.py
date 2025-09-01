from django.urls import path
from .views import *

urlpatterns = [
    path('all/', AccommodationListAPIView.as_view(), name='all'),
    path('<int:pk>/', AccommodationRetrieveUpdateDestroyAPIView.as_view(), name='retrieve'),
    path('amenities/', AmenityListAPIView.as_view(), name='amenity-list'),
    path('cities/', CityListAPIView.as_view(), name='city-list'),
    path('locations/', LocationListCreateAPIView.as_view(), name='location-list'),
    path('my/',MyAccommodationsListCreateAPIView.as_view(), name='my-list'),
]
