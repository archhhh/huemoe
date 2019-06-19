from rest_framework import serializers
from .models import Field, Subfield, Course, Content

class FieldSerializer(serializers.ModelSerializer):

	class Meta:
		model = Field
		fields = ('id', 'title', 'description', 'pic')

class SubfieldSerializer(serializers.ModelSerializer):

	class Meta:
		model = Subfield
		fields = ('id', 'field', 'title', 'description', 'pic')


class CourseSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = ('id', 'subfield', 'title', 'description', 'pic')

class ContentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Content
		fields = ('id', 'course', 'title', 'text', 'video', 'file', 'added', 'updated')