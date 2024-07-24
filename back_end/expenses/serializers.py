from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Expense

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'creator', 'amount', 'description', 'month', 'year']

    def validate_month(self, value):
        if value not in ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']:
            raise serializers.ValidationError("Invalid month value.")
        return value