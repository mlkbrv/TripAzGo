from django.shortcuts import render
from rest_framework import generics
from .models import Product, ProductCategory, ShopCategory, Shop
from .serializers import ProductCategorySerializer, ProductSerializer, ShopSerializer


class AllProducts(generics.ListAPIView):
    queryset = Product.objects.filter(is_verified=True)
    serializer_class = ProductSerializer


class ProductCategoryList(generics.ListAPIView):
    serializer_class = ProductCategorySerializer
    queryset = ProductCategory.objects.all()


class ProductCategoryDetail(generics.RetrieveAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ShopCategoryList(generics.ListAPIView):
    queryset = ShopCategory.objects.filter(is_verified=True)
    serializer_class = ProductCategorySerializer


class AllShops(generics.ListAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class ShopDetail(generics.RetrieveAPIView):
    queryset = Shop.objects.all()
    serializer_class = ProductSerializer
