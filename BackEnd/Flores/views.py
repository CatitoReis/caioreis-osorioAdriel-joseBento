from rest_framework import viewsets
from Flores.models import Flores
from Flores.serializer import FloresSerializer


class FloresViewSet(viewsets.ModelViewSet):
    queryset = Flores.objects.all()
    serializer_class = FloresSerializer