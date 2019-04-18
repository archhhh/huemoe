from django.contrib import admin
from .models import Field, Subfield, Course, Video

class VideoAdd(admin.StackedInline):
	model = Video
	extra = 1

class CourseAdmin(admin.ModelAdmin):
	fieldsets = [
		(None, {'fields':['subfield']}),
		(None, {'fields':['title']}),
	]
	inlines = [VideoAdd]

class SubfieldAdd(admin.StackedInline):
	model = Subfield
	extra = 1
	classes = ['collapse']

class FieldAdmin(admin.ModelAdmin):
	fieldsets = [
		(None, {'fields':['pic']}),
		(None, {'fields':['title']}),
		(None, {'fields':['description']})
	]
	inlines = [SubfieldAdd]

admin.site.register(Field, FieldAdmin)
admin.site.register(Course, CourseAdmin)