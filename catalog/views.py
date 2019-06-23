from .models import Field, Course, Subfield, Content

from rest_framework import viewsets

from .serializers import FieldSerializer, SubfieldSerializer, CourseSerializer, ContentSerializer


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
