from rest_framework import serializers
from users.models import User, SuperHost, CityAndCountry, Language
from .validators import validate_password


class CityAncCountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = CityAndCountry
        fields = [
            'city',
            'country'
        ]


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = [
            'language',
        ]


class UserSerializer(serializers.ModelSerializer):
    lives_in = CityAncCountrySerializer(read_only=True)
    languages = LanguageSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            'email',
            'phone',
            'display_name',
            'real_name',
            'bio',
            'lives_in',
            'languages',
            'website',
            'twitter',
            'facebook',
            'instagram',
            'profile_pic',
            'cover',
            'member_since'
        ]


class SuperHostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = SuperHost
        fields = [
            'user',
            'rating'
        ]


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'}, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, style={'input_type': 'password'}, validators=[validate_password])

    class Meta:
        model = User
        fields = [
            'email',
            'phone',
            'display_name',
            'real_name',
            'password',
            'password2'
        ]

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError('Passwords must match')
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user
