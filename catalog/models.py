from django.db import models


class Field(models.Model):
	title = models.CharField(max_length=255)
	description = models.CharField(max_length=510)
	pic = models.ImageField(upload_to='images/', blank=True, null=True)

	def __str__(self):
		return self.title


class Subfield(models.Model):
	field = models.ForeignKey(Field, on_delete=models.CASCADE, null=True)
	title = models.CharField(max_length=255)
	pic = models.ImageField(upload_to='images/', blank=True, null=True)

	def __str__(self):
		return self.title

class Course(models.Model):
	title = models.CharField(max_length=255)
	subfield = models.ForeignKey(Subfield, on_delete=models.CASCADE, null=True)

	def __str__(self):
		return self.title

class Video(models.Model):
	title = models.CharField(max_length=255)
	link_id = models.CharField(max_length=255)
	catalog = models.ForeignKey(Course, on_delete=models.CASCADE)
	description = models.TextField(default='')