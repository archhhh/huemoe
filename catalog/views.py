from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.core.mail import send_mail, get_connection
from .forms import ContactForm
from .models import Field, Course, Subfield, Content
from django.urls import reverse_lazy
from django.views import generic
from rest_framework import viewsets
from .serializers import FieldSerializer, SubfieldSerializer, CourseSerializer, ContentSerializer

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

def field(request, fslug):
	field_id = Field.objects.get(slug=fslug).id
	subfields = Subfield.objects.filter(field=field_id)
	field = get_object_or_404(Field, pk=field_id)
	return render(request, 'catalog/field.html', {'field':field, 'subfields':subfields})

def subfield(request, fslug, sslug):
	field_id = Field.objects.get(slug=fslug).id
	subfield_id = Subfield.objects.get(slug=sslug).id
	courses = Course.objects.filter(subfield=subfield_id)
	field = get_object_or_404(Field, pk=field_id)
	subfield = get_object_or_404(Subfield, pk=subfield_id)
	return render(request, 'catalog/subfield.html', {'field':field,'subfield':subfield, 'courses':courses})

def course(request, fslug, sslug, cslug):
	field_id = Field.objects.get(slug=fslug).id
	subfield_id = Subfield.objects.get(slug=sslug).id
	course = get_object_or_404(Course, pk=Course.objects.get(slug=cslug).id)
	return render(request, 'catalog/course.html', {'course':course})

def content(request, fslug, sslug, cslug, content_title):
	field_id = Field.objects.get(slug=fslug).id
	subfield_id = Subfield.objects.get(slug=sslug).id
	course = get_object_or_404(Course, pk=Course.objects.get(slug=cslug).id)
	content = get_object_or_404(Content, pk=Content.objects.get(slug=content_title).id)
	return render(request, 'catalog/content.html', {'course':course, 'content':content})


class FieldView(viewsets.ModelViewSet):
	serializer_class = FieldSerializer
	queryset = Field.objects.all()

class SubfieldView(viewsets.ModelViewSet):
	serializer_class = SubfieldSerializer
	queryset = Subfield.objects.all()

class CourseView(viewsets.ModelViewSet):
	serializer_class = CourseSerializer
	queryset = Course.objects.all()

class ContentView(viewsets.ModelViewSet):
	serializer_class = ContentSerializer
	queryset = Content.objects.all()
