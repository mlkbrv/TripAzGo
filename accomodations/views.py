from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from .serializers import *
from .permissions import *
from users.models import *
from users.serializers import *


class AccommodationListAPIView(generics.ListAPIView):
    queryset = Accommodation.objects.filter(is_verified=True)
    permission_classes = [AllowAny]
    serializer_class = AccommodationSerializer

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
    permission_classes = [IsSuperHostOrAdminOnly]
    serializer_class = LocationsSerializer


class MyAccommodationsListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsSuperHostOrAdminOnly]
    serializer_class = AccommodationSerializer

    def get_queryset(self):
        return Accommodation.objects.filter(owner=self.request.user)