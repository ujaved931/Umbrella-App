from django.db import models
from uuid import uuid4
# Create your models here.
class Weather(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid4, editable = False)
    Temperature = models.CharField(max_length = 50)
    Location = models.CharField(max_length = 150)
    Humidity = models.CharField(max_length = 50)
    description = models.CharField(max_length = 50)
    createdAt  = models.DateTimeField(auto_now_add= True)
    last_modified =models.DateTimeField(auto_now_add= True)
    category = models.CharField(max_length=20)
