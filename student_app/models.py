from django.db import models
from django.urls import reverse

class student(models.Model):
    regno = models.IntegerField(blank=True, null=True, unique=True)
    name = models.CharField(max_length=264)
    email = models.EmailField(max_length=264,unique=True)
