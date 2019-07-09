from .models import Field, Course, Subfield, Content
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import FieldSerializer, SubfieldSerializer, CourseSerializer, ContentSerializer


class FieldViewSet(viewsets.ModelViewSet):
        queryset = Field.objects.all()
        serializer_class = FieldSerializer
        filter_backends = (DjangoFilterBackend,)
        filter_fields = ('id',)
#	def list(self, request):
#		queryset = Field.objects.all()
#		serializer = FieldSerializer(queryset, many=True)
#		return Response(serializer.data)
#
#	def retrieve(self, request, pk=None):
#		queryset = Field.objects.all()
#		field = get_object_or_404(queryset, pk=pk)
#		serializer = FieldSerializer(field)
#		return Response(serializer.data)


class SubfieldViewSet(viewsets.ModelViewSet):
        queryset = Subfield.objects.all()
        serializer_class = SubfieldSerializer
        filter_backends = (DjangoFilterBackend,)
        filter_fields = ('field',)
#	def list(self, request):
#		queryset = Subfield.objects.all()
#		serializer = SubfieldSerializer(queryset, many=True)
#		return Response(serializer.data)
#
#	def retrieve(self, request, pk=None):
#		queryset = Subfield.objects.all()
#		subfield = get_object_or_404(queryset, pk=pk)
#		serializer = SubfieldSerializer(subfield)
#		return Response(serializer.data)


class CourseViewSet(viewsets.ModelViewSet):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	filter_backends = (DjangoFilterBackend,)
	filter_fields = ('subfield',)

#	def list(self, request):
#		queryset = Course.objects.all()
#		serializer = CourseSerializer(queryset, many=True)
#		return Response(serializer.data)
#
#	def retrieve(self, request, pk=None):
#		queryset = Course.objects.all()
#		course = get_object_or_404(queryset, pk=pk)
#		serializer = CourseSerializer(course)
#		return Response(serializer.data)
        


class ContentViewSet(viewsets.ModelViewSet):
	queryset = Content.objects.all()
	serializer_class = ContentSerializer
	filter_backends = (DjangoFilterBackend,)
	filter_fields = ('course',)

