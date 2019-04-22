from django.contrib import admin
from .models import Field, Subfield, Course, Content


class SubfieldInline(admin.StackedInline):
	model = Subfield
	prepopulated_fields = {'slug': ('title',)}


@admin.register(Field)
class SubfieldAdmin(admin.ModelAdmin):
	list_display = ['title', 'slug']
	prepopulated_fields = {'slug': ('title',)}
	inlines = [SubfieldInline]


class ContentInline(admin.StackedInline):
	model = Content
	prepopulated_fields = {'slug': ('title',)}


@admin.register(Course)
class ContentAdmin(admin.ModelAdmin):
	list_display = ['title', 'subfield', 'description']
	list_filter = ['subfield']
	prepopulated_fields = {'slug': ('title',)}
	inlines = [ContentInline]
	
# class VideoAdd(admin.StackedInline):
# 	model = Video
# 	extra = 1

# class CourseAdmin(admin.ModelAdmin):
# 	fieldsets = [
# 		(None, {'fields':['subfield']}),
# 		(None, {'fields':['title']}),
# 	]
# 	inlines = [VideoAdd]

# class SubfieldAdd(admin.StackedInline):
# 	model = Subfield
# 	extra = 1
# 	classes = ['collapse']

# class FieldAdmin(admin.ModelAdmin):
# 	fieldsets = [
# 		(None, {'fields':['pic']}),
# 		(None, {'fields':['title']}),
# 		(None, {'fields':['description']})
# 	]
# 	inlines = [SubfieldAdd]

# admin.site.register(Field, FieldAdmin)
# admin.site.register(Course, CourseAdmin)