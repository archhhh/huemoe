from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.core.mail import send_mail, get_connection
from .forms import ContactForm
from .models import Field, Course, Subfield
from django.urls import reverse_lazy
from django.views import generic

def home(request):
	return render(request, 'catalog/home.html')

def contact(request):
	submitted = False
	if request.method =='POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			cd = form.cleaned_data
			con = get_connection('django.core.mail.backends.console.EmailBackend')
			send_mail(
				cd['subject'],
				cd['message'],
				cd.get('email', 'noreply@example.com'),
				['siteowner@example.com'],
				connection = con
			)
			return HttpResponseRedirect('/contact?submitted=True')
	else:
		form = ContactForm()
		if 'submitted' in request.GET:
			submitted = True

	return render(request, 'catalog/contact.html', {'form': form, 'submitted': submitted})

def about(request):
	return render(request, 'catalog/about.html')

def explore(request):
	fields = Field.objects.all()
	return render(request, 'catalog/explore.html', {'fields':fields})

def field(request, field_id):
	subfields = Subfield.objects.filter(field=field_id)
	field = get_object_or_404(Field, pk=field_id)
	return render(request, 'catalog/field.html', {'field':field, 'subfields':subfields})

def subfield(request, field_id, subfield_id):
	courses = Course.objects.filter(subfield=subfield_id)
	field = get_object_or_404(Field, pk=field_id)
	subfield = get_object_or_404(Subfield, pk=subfield_id)
	return render(request, 'catalog/subfield.html', {'field':field,'subfield':subfield, 'courses':courses})

def course(request, field_id, subfield_id, course_id):
	field = get_object_or_404(Field, pk=field_id)
	subfield = get_object_or_404(Subfield, pk=subfield_id)
	course = get_object_or_404(Course, pk=course_id)
	return render(request, 'catalog/course.html', {'course':course, 'field':field, 'subfield':subfield})




