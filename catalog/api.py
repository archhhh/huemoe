from .models import Field, Course, Subfield, Content
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

from .serializers import FieldSerializer, SubfieldSerializer, CourseSerializer, ContentSerializer


class FieldList(generics.ListAPIView):
	serializer_class = FieldSerializer
	queryset = Field.objects.all()


class SubfieldList(generics.ListAPIView):
	serializer_class = SubfieldSerializer
	queryset = Subfield.objects.all()
	filter_backends = (DjangoFilterBackend,)
	filter_fields = ('field',)


class CourseList(generics.ListAPIView):
	serializer_class = CourseSerializer
	queryset = Course.objects.all()
	filter_backends = (DjangoFilterBackend,)
	filter_fields = ('subfield',)


class ContentList(generics.ListAPIView):
	serializer_class = ContentSerializer
	queryset = Content.objects.all()
	filter_backends = (DjangoFilterBackend,)
	filter_fields = ('course',)	
