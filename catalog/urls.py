from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from catalog import views

urlpatterns = [
    path('', views.explore, name='explore'),
    path('<slug:fslug>/', views.field, name='field'),
    path('<slug:fslug>/<slug:sslug>/', views.subfield, name='subfield'),
    path('<slug:fslug>/<slug:sslug>/<int:course_id>/', views.course, name='course'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)