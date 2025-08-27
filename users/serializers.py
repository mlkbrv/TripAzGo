from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import User

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('id','date_joined')

class UserShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'},
        min_length=8,
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'},
        min_length=8,
    )
    class Meta:
        model = User
        fields = [
            'email',
            'phone',
            'first_name',
            'last_name',
            'birthday',
            'picture',
            'password',
            'password2'
        ]
        extra_kwargs = {
            'email': {'required': True},
            'phone': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'birthday': {'required': True},
        }

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            raise ValidationError('Passwords don\'t match')

        try:
            from .models import validate_password
            validate_password(password)
        except ValidationError as e:
            raise serializers.ValidationError({"Password": e.message})

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            phone=validated_data['phone'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            birthday=validated_data['birthday'],
            picture=validated_data['picture'],
            password=validated_data['password'],
        )
        return user