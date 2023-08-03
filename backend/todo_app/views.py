from django.shortcuts import render
from .models import TodoItems
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoItemSerializer

# Create your views here.
class TodoItemViewSet(ModelViewSet):
    queryset = TodoItems.objects.all()
    serializer_class = TodoItemSerializer