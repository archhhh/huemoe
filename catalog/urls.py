from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from . import api

import frontend


urlpatterns = [
    path('api/fields/', api.FieldList.as_view()),
    path('api/subfields/', api.SubfieldList.as_view()),
    path('api/courses/', api.CourseList.as_view()),
    path('api/content/', api.ContentList.as_view()),
    path('', include('frontend.urls')),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)