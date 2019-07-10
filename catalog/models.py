from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField


class Field(models.Model):
	title = models.CharField(max_length=150)
	title_ru = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, unique=True)
	description = models.CharField(max_length=100)
	description_ru = models.CharField(max_length=100)
	img_banner = models.ImageField(upload_to='images/fields', blank=True, null=True)
	img_thumbnail = models.ImageField(upload_to='images/fields', blank=True, null=True)

	class Meta:
		ordering = ['title']

	def __str__(self):
		return self.title


class Subfield(models.Model):
	field = models.ForeignKey(Field, related_name='subfields', on_delete=models.CASCADE)
	title = models.CharField(max_length=150)
	title_ru = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, unique=True)
	img_banner = models.ImageField(upload_to='images/subfields', blank=True, null=True)
	img_thumbnail = models.ImageField(upload_to='images/subfields', blank=True, null=True)
	description = models.TextField(max_length=100)
	description_ru = models.TextField(max_length=100)

	def __str__(self):
		return self.title

class Course(models.Model):
	subfield = models.ForeignKey(Subfield, related_name='courses', on_delete=models.CASCADE, null=True)
	title = models.CharField(max_length=150)
	title_ru = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, unique=True)
	description = models.CharField(max_length=510)
	description_ru = models.CharField(max_length=510)
	img_banner = models.ImageField(upload_to='images/courses', blank=True, null=True)
	img_thumbnail = models.ImageField(upload_to='images/courses', blank=True, null=True)
	organization_name = models.CharField(max_length=150)
	organization_img = models.ImageField(upload_to='images/courses', blank=True, null=True)
	organization_url = models.URLField()
	instructor = models.CharField(max_length=150)
	instructior_url = models.URLField()
	level = models.CharField(max_length=150)
	level_ru = models.CharField(max_length=150)
	tags = ArrayField(models.CharField(max_length=100), blank=True)
	tags_ru = ArrayField(models.CharField(max_length=100), blank=True)
	supported_languages = JSONField()

	def __str__(self):
		return '{}. {}'.format(self.id, self.title)

class Content(models.Model):
	course = models.ForeignKey(Course, related_name='contents', on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	title_ru = models.CharField(max_length=255)
	content_type = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True)
	text = models.TextField(null=True, blank=True)
	text_ru = models.TextField(null=True, blank=True)
	video = models.FileField(null=True, blank=True)
	added = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	week = models.IntegerField()
	order = models.IntegerField()
	subtitle = models.FileField(upload_to='subtitles', null=True, blank=True)
	subtitle_ru = models.FileField(upload_to='subtitles', null=True, blank=True)
	supplementary_materials = models.FileField(upload_to='supplementary_materials', null=True, blank=True)
