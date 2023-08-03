from django.db import models

# Create your models here.
class TodoItems(models.Model):

    title = models.CharField(max_length=100, null=False)
    completed = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.title