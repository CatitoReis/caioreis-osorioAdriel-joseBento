from rest_framework import viewsets
from Plantas_Medicinais.models import Plantas_Medicinais
from Plantas_Medicinais.serializer import PlantasMedicinaisSerializer


class PlantasMedicinaisViewSet(viewsets.ModelViewSet):
    queryset = Plantas_Medicinais.objects.all()
    serializer_class = PlantasMedicinaisSerializer