# hospital_mgmt/views.py

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.template.loader import get_template # For loading HTML template for PDF
from io import BytesIO # To write PDF to memory
from xhtml2pdf import pisa # Uncommented this line to enable PDF generation

from .models import Patient, Doctor, Appointment, Billing

def home(request):
    """
    Renders the home page (dashboard).
    """
    return render(request, 'home.html')

def patients_view(request):
    """
    Renders the patient list page, fetching all patient records.
    """
    patients = Patient.objects.all()
    context = {
        'patients': patients
    }
    return render(request, 'patients.html', context)

def doctors_view(request):
    """
    Renders the doctor list page, fetching all doctor records.
    """
    doctors = Doctor.objects.all()
    context = {
        'doctors': doctors
    }
    return render(request, 'doctors.html', context)

def appointments_view(request):
    """
    Renders the appointments list page, fetching all appointment records.
    """
    appointments = Appointment.objects.all().order_by('appointment_date', 'appointment_time')
    context = {
        'appointments': appointments
    }
    return render(request, 'appointments.html', context)

def billings_view(request):
    """
    Renders the billing records page, fetching all billing records.
    """
    billings = Billing.objects.all().order_by('-billing_date', '-id')
    context = {
        'billings': billings
    }
    return render(request, 'billings.html', context)

@csrf_exempt # TEMPORARY: This decorator disables CSRF protection for this view.
             # In a real app, you'd use {% csrf_token %} in forms or get it via JS.
def save_theme_preference(request):
    """
    Receives theme preference via AJAX POST request and prints it.
    In a real application, this would save the theme to a user's profile in the database.
    """
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            theme = data.get('theme')
            # Example of how you would save this in a real application:
            # if request.user.is_authenticated:
            #     # Assuming UserProfile model has a 'theme' field linked to User
            #     request.user.userprofile.theme = theme
            #     request.user.userprofile.save()
            print(f"Received theme preference from frontend: {theme}") # For demonstration purposes
            return JsonResponse({'status': 'success', 'message': f'Theme "{theme}" received.'})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Only POST requests allowed'}, status=405)

def download_bill(request, bill_id):
    """
    Generates and serves a bill for download.
    Now generates a PDF file using xhtml2pdf.
    """
    bill = get_object_or_404(Billing, pk=bill_id)

    # --- Option 1: Generate a simple text file (COMMENTED OUT) ---
    # bill_content = f"""
# Swaastya Hospital Bill

# Bill ID: {bill.id}
# Patient: {bill.patient.name} (SWSID: {bill.patient.swsid})
# Service: {bill.service_description}
# Amount: ${bill.amount:.2f}
# Billing Date: {bill.billing_date.strftime('%Y-%m-%d %H:%M')}
# Status: {'Paid' if bill.is_paid else 'Unpaid'}

# Thank you for your visit!
# """
    # response = HttpResponse(bill_content, content_type='text/plain')
    # response['Content-Disposition'] = f'attachment; filename="bill_{bill.id}.txt"'
    # return response

    # --- Option 2: Generate a PDF using xhtml2pdf (UNCOMMENTED) ---
    template_path = 'bill_pdf_template.html' # Make sure you have this template in your templates folder
    context = {'bill': bill}
    template = get_template(template_path)
    html = template.render(context)

    result = BytesIO()
    pdf = pisa.CreatePDF(
        html,                # the HTML to convert
        dest=result)         # file handle to receive result

    if pdf.err:
        return HttpResponse('We had some errors <pre>%s</pre>' % html, status=400)

    response = HttpResponse(result.getvalue(), content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="Swaastya_Bill_{bill.id}.pdf"'
    return response
