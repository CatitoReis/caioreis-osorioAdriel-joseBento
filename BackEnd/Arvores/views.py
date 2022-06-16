from rest_framework import viewsets
from Arvores.models import Arvores
from Arvores.serializer import ArvoresSerializer


class ArvoresViewSet(viewsets.ModelViewSet):
    queryset = Arvores.objects.all()
    serializer_class = ArvoresSerializer