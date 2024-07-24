from django.db import models
from django.contrib.auth.models import User


class Expense(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='expenses')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=255)
    month = models.CharField(max_length=2, default='01')
    year = models.PositiveIntegerField(default=2000)
    def __str__(self):
        return f"{self.description} - {self.amount} {self.year}"
