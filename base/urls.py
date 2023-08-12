from django.urls import path
from base.views import ProductAPI, ProductDetailAPI

urlpatterns = [
    path('product/', ProductAPI.as_view()),
    path('detail/<int:pk>/', ProductDetailAPI.as_view()),
]