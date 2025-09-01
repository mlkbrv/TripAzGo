from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .serializers import *
from .permissions import *
from users.models import *
from users.serializers import *

class AccommodationListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsSuperHostOrAdmin]
    serializer_class = AccommodationSerializer

    def get_queryset(self):
        return Accommodation.objects.filter(is_verified=True)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class AccommodationRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Accommodation.objects.all()
    permission_classes = [IsSuperHostOrReadOnly]
    serializer_class = AccommodationSerializer

class AmenityListAPIView(generics.ListAPIView):
    queryset = Amenity.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = AmenitySerializer

class CityListAPIView(generics.ListAPIView):
    queryset = CityAndCountry.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = CityAncCountrySerializer

class LocationListCreateAPIView(generics.ListCreateAPIView):
    queryset = Locations.objects.all()
    permission_classes = [IsSuperHostOrAdmin]
    serializer_class = LocationsSerializer