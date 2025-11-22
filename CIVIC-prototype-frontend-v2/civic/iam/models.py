from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Clinic(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    manager_name = models.CharField(max_length=255)
    clinic_code = models.CharField(max_length=255)  # hashed version of the registration password
    created_at = models.DateTimeField(auto_now_add=True)

    def set_clinic_code(self, raw_code):
        self.clinic_code = make_password(raw_code)

    def check_clinic_code(self, raw_code):
        return check_password(raw_code, self.clinic_code)

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('viewer', 'Viewer'),
        ('civicadmin', 'CivicAdmin'),
    ]

    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name='users', null=True, blank=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='viewer')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
