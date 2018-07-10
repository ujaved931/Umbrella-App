from django.db import models

# Create your models here.
class Weather(models.Model):
   
    Temperature = models.CharField(max_length = 200)
    Location = models.CharField(max_length = 200)
    Humidity = models.CharField(max_length = 200)
    description = models.CharField(max_length = 200)
    createdAt  = models.DateTimeField(auto_now_add= True)
    last_modified =models.DateTimeField(auto_now_add= True)
    category = models.CharField(max_length=20)
