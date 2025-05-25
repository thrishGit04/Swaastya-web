# hospital_mgmt/admin.py
from django.contrib import admin
from .models import Patient, Doctor, Appointment, Billing # Import new models

admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Appointment) # Register Appointment
admin.site.register(Billing)     # Register Billing