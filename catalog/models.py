from django.db import models


class Field(models.Model):
	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True)
	description = models.CharField(max_length=510)
	pic = models.ImageField(upload_to='images/fields', blank=True, null=True)

	class Meta:
		ordering = ['title']

	def __str__(self):
		return self.title


class Subfield(models.Model):
	field = models.ForeignKey(Field, related_name='subfields', on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True)
	pic = models.ImageField(upload_to='images/subfields', blank=True, null=True)
	description = models.TextField()

	def __str__(self):
		return self.title

class Course(models.Model):
	subfield = models.ForeignKey(Subfield, related_name='courses', on_delete=models.CASCADE, null=True)
	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True)
	description = models.CharField(max_length=510)
	pic = models.ImageField(upload_to='images/courses', blank=True, null=True)

	def __str__(self):
		return '{}. {}'.format(self.id, self.title)

class Content(models.Model):
	course = models.ForeignKey(Course, related_name='contents', on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	slug = models.SlugField(max_length=255, unique=True)
	text = models.TextField(null=True, blank=True)
	video = models.URLField(null=True, blank=True)
	file = models.FileField(upload_to='files', null=True, blank=True)
	added = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
