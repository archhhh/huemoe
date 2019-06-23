from catalog.models import Field

from rest_framework import viewsets, permissions

from .serializers import FieldSerializer


class FieldViewSet(viewsets.ModelViewSet):
	serializer_class = FieldSerializer
	queryset = Field.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
