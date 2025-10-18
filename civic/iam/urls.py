from django.urls import path
from .views import me, ping, register_clinic, register_user, MyTokenObtainPairView

urlpatterns = [
    path('me/', me, name='me'),
    path('ping/', ping, name='ping'),
    path('register-clinic/', register_clinic, name='register_clinic'),
    path('register-user/', register_user, name='register_user'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
