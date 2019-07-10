from rest_framework import serializers

from .models import Field, Subfield, Course, Content


class FieldSerializer(serializers.ModelSerializer):

	class Meta:
		model = Field
		fields = ('id', 'title', 'title_ru', 'description', 'description_ru', 'img_banner', 'img_thumbnail',)

class SubfieldSerializer(serializers.ModelSerializer):

	class Meta:
		model = Subfield
		fields = ('id', 'field', 'title', 'title_ru', 'description', 'description_ru', 'img_banner', 'img_thumbnail',)


class CourseSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = (
			'id', 'subfield', 'title', 'title_ru', 'description',
			'description_ru', 'img_banner', 'img_thumbnail', 'organization_name',
			'organization_img', 'organization_url', 'instructor', 'instructor_url',
			'level', 'level_ru', 'tags', 'tags_ru'
		)


class ContentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Content
		fields = (
			'id', 'course', 'title', 'title_ru', 'text', 'text_ru',
			'video', 'added', 'updated', 'week', 'order', 'subtitle',
			'supplementary_materials',
		)
