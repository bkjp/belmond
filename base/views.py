from django.shortcuts import render

from rest_framework import generics

from base.models import Product
from base.serializers import ProductSerializer


class ProductAPI(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductDetailAPI(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()