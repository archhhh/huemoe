from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import SimpleRouter

from . import api

import frontend


router = SimpleRouter(trailing_slash=False)
router.register('api/fields', api.FieldViewSet, basename='field')
router.register('api/subfields', api.SubfieldViewSet, basename='subfield')
router.register('api/courses', api.CourseViewSet, basename='course')
router.register('api/contents', api.ContentViewSet, basename='content')

urlpatterns = [
    path('', include(router.urls)),
    path('', include('frontend.urls')),

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
