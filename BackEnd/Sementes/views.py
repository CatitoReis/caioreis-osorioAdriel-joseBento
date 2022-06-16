from rest_framework import viewsets
from Sementes.models import Sementes
from Sementes.serializer import SementesSerializer


class SementesViewSet(viewsets.ModelViewSet):
    queryset = Sementes.objects.all()
    serializer_class = SementesSerializer