from rest_framework import serializers
from .models import ShopOwnerProfile, Shop, ShopCategory, ProductCategory, Product, CustomerProfile, ShopFile, \
    ProductFile
from users.serializers import UserShortSerializer


class ShopOwnerProfileSerializer(serializers.ModelSerializer):
    user = UserShortSerializer(read_only=True)

    class Meta:
        model = ShopOwnerProfile
        fields = ('id', 'user', 'is_verified', 'document')


class CustomerProfileSerializer(serializers.ModelSerializer):
    user = UserShortSerializer(read_only=True)

    class Meta:
        model = CustomerProfile
        fields = ('id', 'user', 'is_blocked')


class ProductCategorySerializer(serializers.ModelSerializer):
    parent = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = ProductCategory
        fields = [
            'parent',
            'name',
        ]


class ShopCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopCategory
        fields = [
            'name',
        ]


class ShopFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopFile
        fields = [
            'file',
            'uploaded_at'
        ]


class ProductFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFile
        fields = [
            'file',
            'uploaded_at'
        ]


class ShopSerializer(serializers.ModelSerializer):
    category = ShopCategorySerializer(read_only=True)
    owner = ShopOwnerProfileSerializer(read_only=True)
    shop_files = ShopFileSerializer(many=True, read_only=True)

    class Meta:
        model = Shop
        fields = [
            'name',
            'category',
            'description',
            'owner',
            'site',
            'address',
            'is_verified',
            'shop_files',
        ]


class ProductSerializer(serializers.ModelSerializer):
    category = ProductCategorySerializer(read_only=True)
    shops = ShopSerializer(many=True, read_only=True)
    product_files = ProductFileSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'name',
            'category',
            'description',
            'shops',
            'is_verified',
            'version',
            'product_files',
        ]
