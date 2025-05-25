from django.db import models
from django.utils import timezone


class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.TextField()
    # Add this new field for SWSID
    swsid = models.CharField(max_length=20, unique=True, default='SWP000') # You can change the default value as needed

    def __str__(self):
        return self.name

# You might have other models like Doctor, Appointment, Billing below this

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    # Add these new fields:
    hospital_name = models.CharField(max_length=100, default='Swaastya Hospital')
    available_timings = models.CharField(max_length=200, default='Mon-Fri, 9 AM - 5 PM')
    swsid = models.CharField(max_length=20, unique=True, default='SWD000') # Doctor SWSID

    def __str__(self):
        return self.name


class Appointment(models.Model):
    patient = models.ForeignKey('Patient', on_delete=models.CASCADE)
    doctor = models.ForeignKey('Doctor', on_delete=models.CASCADE)
    # Add default values here
    appointment_date = models.DateField(default=timezone.now) # Sets to current date upon object creation
    appointment_time = models.TimeField(default=timezone.now) # Sets to current time upon object creation
    reason = models.TextField(blank=True, null=True, default='') # Allow null in DB, blank in forms, default empty string
    status = models.CharField(max_length=50, default='Scheduled') # Default status

    def __str__(self):
        return f"Appointment for {self.patient.name} with Dr. {self.doctor.name} on {self.appointment_date} at {self.appointment_time}"


class Billing(models.Model):
    patient = models.ForeignKey('Patient', on_delete=models.CASCADE)
    service_description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    # REVERTED CHANGE: Removed null=True
    billing_date = models.DateField(auto_now_add=True) # <-- REMOVED null=True
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Bill for {self.patient.name}: {self.service_description} - Rs.{self.amount}"