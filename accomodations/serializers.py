from django.core.exceptions import ValidationError
from django.utils import timezone
from rest_framework import serializers
from .models import Amenity, Accommodation, Locations, Booking, AccommodationFile
from users.serializers import SuperHostSerializer, CityAncCountrySerializer


class LocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = [
            'latitude',
            'longitude',
        ]


class AccommodationFileSerializer(serializers.ModelSerializer):
    file_url = serializers.ImageField(use_url=True)

    class Meta:
        model = AccommodationFile
        fields = [
            'file_url',
            'uploaded_at',
        ]


class AmenitySerializer(serializers.ModelSerializer):
    icon = serializers.ImageField(use_url=True)

    class Meta:
        model = Amenity
        fields = [
            'name',
            'icon'
        ]


class AccommodationSerializer(serializers.ModelSerializer):
    owner = SuperHostSerializer(read_only=True)
    amenities = AmenitySerializer(many=True)
    location = LocationsSerializer()
    files = AccommodationFileSerializer(many=True)
    city = CityAncCountrySerializer()

    class Meta:
        model = Accommodation
        fields = [
            'title',
            'description',
            'owner',
            'location',
            'amenities',
            'number_of_guests',
            'number_of_beds',
            'number_of_bathrooms',
            'number_of_bedrooms',
            'check_in',
            'check_out',
            'price_per_night',
            'files',
            'city',
        ]


class BookingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            'accommodation',
            'checked_in',
            'checked_out',
            'message_to_the_host'
        ]

        extra_kwargs = {
            'accommodation': {'required': False},
            'checked_in': {'required': False},
            'guest': {'required': True},
            'message_to_the_host': {'required': False},
        }

    def validate_checked_in(self, value):
        if value and value < timezone.now().date():
            raise serializers.ValidationError("The check-in date cannot be in the past.")
        return value

    def validate(self, attrs):
        checked_in = attrs.get('checked_in')
        checked_out = attrs.get('checked_out')
        accommodation = attrs.get('accommodation')

        if checked_in and checked_out:
            if checked_in >= checked_out:
                raise serializers.ValidationError(
                    "The check-out date must be later than the check-in date."
                )

        if accommodation:
            if checked_in and accommodation.check_in and checked_in < accommodation.check_in:
                raise serializers.ValidationError(
                    f"Check-in must be no earlier than {accommodation.check_in}."
                )
            if checked_out and accommodation.check_out and checked_out > accommodation.check_out:
                raise serializers.ValidationError(
                    f"Check-out must be no later than {accommodation.check_out}."
                )

            if checked_in and checked_out and accommodation.bookings.filter(
                    checked_in__lt=checked_out,
                    checked_out__gt=checked_in
            ).exists():
                raise serializers.ValidationError("Selected dates are already booked.")

        return attrs


class BookingListSerializer(serializers.ModelSerializer):
    accommodation = AccommodationSerializer(read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = [
            'uuid',
            'accommodation',
            'checked_in',
            'checked_out',
            'nights',
            'total_price',
            'message_to_the_host',
            'created_at'
        ]

    def get_total_price(self, obj):
        return obj.get_total_price
