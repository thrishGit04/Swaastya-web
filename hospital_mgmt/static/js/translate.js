// static/js/translate.js

const translations = {
    "en": {
        "app_main_title": "Swaastya",
        "nav_dashboard": "Dashboard",
        "nav_home": "Home",
        "nav_patients": "Patients",
        "nav_doctors": "Doctors",
        "nav_appointments": "Appointments",
        "nav_billings": "Billings",
        "sidebar_settings": "Settings",
        "sidebar_logout": "Logout",

        "dashboard_heading": "Dashboard",
        "search_placeholder": "Search...",
        "search_button": "Search",

        "card_appointments_title": "Today's Appointments",
        "card_appointments_footer": "+5% from last week",
        "card_vacancies_title": "Vacancies",
        "card_vacancies_footer": "+2 new this week",
        "card_candidates_title": "Candidates",
        "card_candidates_footer": "+8 from last month",
        "card_hospitals_title": "Hospitals",
        "card_hospitals_footer": "No change",

        "section_today_appointments_title": "Today's Appointments",
        "view_all_link": "View All",
        "status_confirmed": "confirmed",
        "status_scheduled": "scheduled",

        "section_quick_actions_title": "Quick Actions",
        "action_schedule_appointment": "Schedule Appointment",
        "action_create_job_post": "Create Job Post",
        "action_search_patients": "Search Patients",
        "action_waitlist": "Waitlist",

        "patients_page_title": "Patient List",
        "patient_intro": "Here you can find a list of all registered patients.",
        "patient_swsid_label": "SWSID:",

        "doctors_page_title": "Doctor List",
        "doctor_intro": "Browse through the list of doctors and their specializations.",
        "doctor_swsid_label": "SWSID:",
        "doctor_specialization_label": "Specialization:",
        "doctor_hospital_label": "Hospital:",
        "doctor_timings_label": "Available Timings:",

        "appointments_page_title": "Appointment List",
        "appointment_intro": "View scheduled appointments for patients and doctors.",
        "appointment_patient_label": "Patient:",
        "appointment_doctor_label": "Doctor:",
        "appointment_date_label": "Date:",
        "appointment_time_label": "Time:",
        "appointment_reason_label": "Reason:",
        "appointment_status_label": "Status:",
        "no_appointments": "No appointments scheduled yet.",

        "billings_page_title": "Billing Records",
        "billing_intro": "Access detailed billing information for all patients.",
        "billing_patient_label": "Patient:",
        "billing_service_label": "Service:",
        "billing_amount_label": "Amount:",
        "billing_date_label": "Date:",
        "billing_paid_label": "Paid:",
        "yes": "Yes",
        "no": "No",
        "no_billings": "No billing records found.",
        "download_bill_button": "Download Bill" // Added for download button
    },
    "hi": {
        "app_main_title": "स्वास्थ्य",
        "nav_dashboard": "डैशबोर्ड",
        "nav_home": "होम",
        "nav_patients": "रोगी",
        "nav_doctors": "डॉक्टर",
        "nav_appointments": "नियुक्तियाँ",
        "nav_billings": "बिलिंग",
        "sidebar_settings": "सेटिंग्स",
        "sidebar_logout": "लॉग आउट",

        "dashboard_heading": "डैशबोर्ड",
        "search_placeholder": "खोजें...",
        "search_button": "खोजें",

        "card_appointments_title": "आज की नियुक्तियाँ",
        "card_appointments_footer": "पिछले सप्ताह से +5%",
        "card_vacancies_title": "रिक्तियां",
        "card_vacancies_footer": "इस सप्ताह 2 नई",
        "card_candidates_title": "उम्मीदवार",
        "card_candidates_footer": "पिछले महीने से +8",
        "card_hospitals_title": "अस्पताल",
        "card_hospitals_footer": "कोई बदलाव नहीं",

        "section_today_appointments_title": "आज की नियुक्तियाँ",
        "view_all_link": "सभी देखें",
        "status_confirmed": "पुष्टि",
        "status_scheduled": "निर्धारित",

        "section_quick_actions_title": "त्वरित कार्य",
        "action_schedule_appointment": "नियुक्ति निर्धारित करें",
        "action_create_job_post": "जॉब पोस्ट बनाएं",
        "action_search_patients": "रोगियों को खोजें",
        "action_waitlist": "प्रतीक्षा सूची",

        "patients_page_title": "रोगी सूची",
        "patient_intro": "यहां आपको सभी पंजीकृत रोगियों की सूची मिल सकती है।",
        "patient_swsid_label": "स्वास्थ्य आईडी:",

        "doctors_page_title": "डॉक्टर सूची",
        "doctor_intro": "डॉक्टरों और उनकी विशेषज्ञताओं की सूची ब्राउज़ करें।",
        "doctor_swsid_label": "डॉक्टर आईडी:",
        "doctor_specialization_label": "विशेषज्ञता:",
        "doctor_hospital_label": "अस्पताल:",
        "doctor_timings_label": "उपलब्ध समय:",

        "appointments_page_title": "नियुक्ति सूची",
        "appointment_intro": "रोगियों और डॉक्टरों के लिए निर्धारित नियुक्तियों देखें।",
        "appointment_patient_label": "रोगी:",
        "appointment_doctor_label": "डॉक्टर:",
        "appointment_date_label": "दिनांक:",
        "appointment_time_label": "समय:",
        "appointment_reason_label": "कारण:",
        "appointment_status_label": "स्थिति:",
        "no_appointments": "अभी तक कोई नियुक्ति निर्धारित नहीं है।",

        "billings_page_title": "बिलिंग रिकॉर्ड",
        "billing_intro": "सभी रोगियों के लिए विस्तृत बिलिंग जानकारी तक पहुंचें।",
        "billing_patient_label": "रोगी:",
        "billing_service_label": "सेवा:",
        "billing_amount_label": "राशि:",
        "billing_date_label": "दिनांक:",
        "billing_paid_label": "भुगतान किया गया:",
        "yes": "हाँ",
        "no": "नहीं",
        "no_billings": "कोई बिलिंग रिकॉर्ड नहीं मिला।",
        "download_bill_button": "बिल डाउनलोड करें"
    },
    "kn": {
        "app_main_title": "ಸ್ವಾಸ್ಥ್ಯ",
        "nav_dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "nav_home": "ಮುಖಪುಟ",
        "nav_patients": "ರೋಗಿಗಳು",
        "nav_doctors": "ವೈದ್ಯರು",
        "nav_appointments": "ನೇಮಕಾತಿಗಳು",
        "nav_billings": "ಬಿಲ್ಲಿಂಗ್‌ಗಳು",
        "sidebar_settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
        "sidebar_logout": "ಲಾಗ್‌ಔಟ್",

        "dashboard_heading": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "search_placeholder": "ಹುಡುಕಿ...",
        "search_button": "ಹುಡುಕಿ",

        "card_appointments_title": "ಇಂದಿನ ನೇಮಕಾತಿಗಳು",
        "card_appointments_footer": "ಕಳೆದ ವಾರದಿಂದ +5%",
        "card_vacancies_title": "ಖಾಲಿ ಹುದ್ದೆಗಳು",
        "card_vacancies_footer": "ಈ ವಾರ 2 ಹೊಸದು",
        "card_candidates_title": "ಅಭ್ಯರ್ಥಿಗಳು",
        "card_candidates_footer": "ಕಳೆದ ತಿಂಗಳಿಂದ +8",
        "card_hospitals_title": "ಆಸ್ಪತ್ರೆಗಳು",
        "card_hospitals_footer": "ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲ",

        "section_today_appointments_title": "ಇಂದಿನ ನೇಮಕಾತಿಗಳು",
        "view_all_link": "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
        "status_confirmed": "ದೃಢೀಕರಿಸಲಾಗಿದೆ",
        "status_scheduled": "ನಿಗದಿಪಡಿಸಲಾಗಿದೆ",

        "section_quick_actions_title": "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
        "action_schedule_appointment": "ನೇಮಕಾತಿ ನಿಗದಿಪಡಿಸಿ",
        "action_create_job_post": "ಉದ್ಯೋಗ ಪೋಸ್ಟ್ ರಚಿಸಿ",
        "action_search_patients": "ರೋಗಿಗಳನ್ನು ಹುಡುಕಿ",
        "action_waitlist": "ಕಾಯುವ ಪಟ್ಟಿ",

        "patients_page_title": "ರೋಗಿಗಳ ಪಟ್ಟಿ",
        "patient_intro": "ಇಲ್ಲಿ ನೀವು ಎಲ್ಲಾ ನೋಂದಾಯಿತ ರೋಗಿಗಳ ಪಟ್ಟಿಯನ್ನು ಕಾಣಬಹುದು.",
        "patient_swsid_label": "ಸ್ವಾಸ್ಥ್ಯ ಐಡಿ:",

        "doctors_page_title": "ವೈದ್ಯರ ಪಟ್ಟಿ",
        "doctor_intro": "ವೈದ್ಯರ ಮತ್ತು ಅವರ ವಿಶೇಷತೆಗಳ ಪಟ್ಟಿಯನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ.",
        "doctor_swsid_label": "ವೈದ್ಯರ ಐಡಿ:",
        "doctor_specialization_label": "ವಿಶೇಷತೆ:",
        "doctor_hospital_label": "ಆಸ್ಪತ್ರೆ:",
        "doctor_timings_label": "ಲಭ್ಯವಿರುವ ಸಮಯ:",

        "appointments_page_title": "ನೇಮಕಾತಿ ಪಟ್ಟಿ",
        "appointment_intro": "ರೋಗಿಗಳು ಮತ್ತು ವೈದ್ಯರ ನಿಗದಿಪಡಿಸಿದ ನೇಮಕಾತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
        "appointment_patient_label": "ರೋಗಿ:",
        "appointment_doctor_label": "ವೈದ್ಯರು:",
        "appointment_date_label": "ದಿನಾಂಕ:",
        "appointment_time_label": "ಸಮಯ:",
        "appointment_reason_label": "ಕಾರಣ:",
        "appointment_status_label": "ಸ್ಥಿತಿ:",
        "no_appointments": "ಇನ್ನೂ ಯಾವುದೇ ನೇಮಕಾತಿ ನಿಗದಿಪಡಿಸಿಲ್ಲ.",

        "billings_page_title": "ಬಿಲ್ಲಿಂಗ್ ದಾಖಲೆಗಳು",
        "billing_intro": "ಎಲ್ಲಾ ರೋಗಿಗಳ ವಿವರವಾದ ಬಿಲ್ಲಿಂಗ್ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸಿ.",
        "billing_patient_label": "ರೋಗಿ:",
        "billing_service_label": "ಸೇವೆ:",
        "billing_amount_label": "ಮೊತ್ತ:",
        "billing_date_label": "ದಿನಾಂಕ:",
        "billing_paid_label": "ಪಾವತಿಸಲಾಗಿದೆ:",
        "yes": "ಹೌದು",
        "no": "ಇಲ್ಲ",
        "no_billings": "ಯಾವುದೇ ಬಿಲ್ಲಿಂಗ್ ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        "download_bill_button": "ಬಿಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
    }
};

function translatePage() {
    const selector = document.getElementById('language-selector');
    const selectedLanguage = selector.value;
    const currentTranslations = translations[selectedLanguage];

    if (!currentTranslations) {
        console.warn(`No translations found for language: ${selectedLanguage}`);
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (currentTranslations[key]) {
            element.setAttribute('placeholder', currentTranslations[key]);
        }
    });

    localStorage.setItem('selectedLanguage', selectedLanguage);
}

// --- Theme Switcher Logic ---

function applyTheme(theme) {
    const body = document.body;
    const themeSwitch = document.getElementById('theme-switch');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeSwitch) themeSwitch.checked = true;
    } else {
        body.classList.remove('dark-theme');
        if (themeSwitch) themeSwitch.checked = false;
    }
    localStorage.setItem('theme', theme); // Still save to localStorage for immediate client-side persistence

    // --- Send theme preference to backend via AJAX ---
    // In a real application, you would also send the CSRF token.
    // For now, @csrf_exempt is used on the backend view for demonstration.
    fetch('/save-theme-preference/', { // The URL to your Django view
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': getCookie('csrftoken') // Uncomment and implement getCookie in production
        },
        body: JSON.stringify({ theme: theme })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Backend response for theme preference:', data);
    })
    .catch(error => {
        console.error('Error saving theme preference to backend:', error);
    });
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Function to get CSRF token from cookies (needed for production AJAX POST)
// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }


// Event listener for theme switch and initial setup
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
    }

    // Apply saved theme on load, or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Optionally, detect system preference:
        // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     applyTheme('dark');
        // } else {
            applyTheme('light'); // Default to light if no preference saved
        // }
    }

    // Apply saved language on load
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = savedLanguage;
        }
    }
    translatePage(); // Call translatePage after setting the selector value or using default

    // Highlight active navigation item based on current URL
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const currentPath = window.location.pathname;

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === currentPath || (currentPath === '/' && item.getAttribute('href') === '/')) {
            item.classList.add('active');
        }
    });
});
