from rest_framework.serializers import ModelSerializer

from .models import TodoItems

class TodoItemSerializer(ModelSerializer):
    class Meta:
        model = TodoItems
        fields = ["id", "title", "completed"]