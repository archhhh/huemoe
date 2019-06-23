from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from . import views
from rest_framework import routers
import frontend


router = routers.DefaultRouter()
router.register('fields', views.FieldView, 'field')


urlpatterns = [
    path('', include(router.urls)),
    path('', include('frontend.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)