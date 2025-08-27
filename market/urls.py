from django.urls import path
from . import views

urlpatterns = [
    path('products/all/', views.AllProducts.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    path('categories/all/', views.ProductCategoryList.as_view(), name='categories-all'),
    path('categories/<int:pk>/', views.ProductCategoryDetail.as_view(), name='category-detail'),
    path('shops-categories/all/', views.ShopCategoryList.as_view(), name='shops-categories-all'),
    path('shops/all/', views.AllShops.as_view(), name='shops-all'),
    path('shops/<int:pk>/', views.ShopDetail.as_view(), name='shop-detail'),
]
