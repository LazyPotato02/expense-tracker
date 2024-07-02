from django.urls import path
from .views import RegisterView, CustomAuthToken, LogoutView,VerifyAuthView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('verify/', VerifyAuthView.as_view(), name='verify-auth'),
]
