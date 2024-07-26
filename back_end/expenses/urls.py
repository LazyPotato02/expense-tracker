from django.urls import path
from .views import RegisterView, CustomAuthToken, LogoutView, VerifyAuthView, ExpenseListCreateView, ExpenseDetailView, \
    UserIdView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('verify/', VerifyAuthView.as_view(), name='verify-auth'),
    path('user-id/',UserIdView.as_view(), name='user-id'),
    path('expenses/', ExpenseListCreateView.as_view(), name='expense-list-create'),
    path('expenses/<int:pk>/', ExpenseDetailView.as_view(), name='expense-detail'),
]
