from django.urls import path, include
from .views import TodoItemViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('todo_app', TodoItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]