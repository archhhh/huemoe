from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from catalog import views

urlpatterns = [
    path('', views.explore, name='explore'),
    path('<slug:fslug>/', views.field, name='field'),
    path('<slug:fslug>/<slug:sslug>/', views.subfield, name='subfield'),
    path('<slug:fslug>/<slug:sslug>/<slug:cslug>/', views.course, name='course'),
    path('<slug:fslug>/<slug:sslug>/<slug:cslug>/<slug:content_title>', views.content, name='content'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)