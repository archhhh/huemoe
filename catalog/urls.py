from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from catalog import views

urlpatterns = [
    path('', views.explore, name='explore'),
    path('<int:field_id>/', views.field, name='field'),
    path('<int:field_id>/<int:subfield_id>/', views.subfield, name='subfield'),
    path('<int:field_id>/<int:subfield_id>/<int:course_id>/', views.course, name='course'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)