from .models import Field, Course, Subfield, Content
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import FieldSerializer, SubfieldSerializer, CourseSerializer, ContentSerializer


class FieldViewSet(viewsets.ViewSet):
	
	def list(self, request):
		queryset = Field.objects.all()
		serializer = FieldSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Field.objects.all()
		field = get_object_or_404(queryset, pk=pk)
		serializer = FieldSerializer(field)
		return Response(serializer.data)


class SubfieldViewSet(viewsets.ViewSet):
	
	def list(self, request):
		queryset = Subfield.objects.all()
		serializer = SubfieldSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Subfield.objects.all()
		subfield = get_object_or_404(queryset, pk=pk)
		serializer = SubfieldSerializer(subfield)
		return Response(serializer.data)


class CourseViewSet(viewsets.ViewSet):
	
	def list(self, request):
		queryset = Course.objects.all()
		serializer = FieldSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Course.objects.all()
		course = get_object_or_404(queryset, pk=pk)
		serializer = CourseSerializer(course)
		return Response(serializer.data)



class ContentViewSet(viewsets.ViewSet):
	
	def list(self, request):
		queryset = Content.objects.all()
		serializer = ContentSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		queryset = Content.objects.all()
		content = get_object_or_404(queryset, pk=pk)
		serializer = ContentSerializer(content)
		return Response(serializer.data)

