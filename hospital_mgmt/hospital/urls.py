# hospital_mgmt/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('patients/', views.patients_view, name='patients_list'),
    path('doctors/', views.doctors_view, name='doctors_list'),
    path('appointments/', views.appointments_view, name='appointments_list'),
    path('billings/', views.billings_view, name='billings_list'),
    path('save-theme-preference/', views.save_theme_preference, name='save_theme_preference'),
    path('download-bill/<int:bill_id>/', views.download_bill, name='download_bill'), # New download URL
]
