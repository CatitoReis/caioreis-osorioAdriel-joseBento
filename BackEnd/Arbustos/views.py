from rest_framework import viewsets
from Arbustos.models import Arbustos
from Arbustos.serializer import ArbustosSerializer





class ArbustosViewSet(viewsets.ModelViewSet):
    queryset = Arbustos.objects.all()
    serializer_class = ArbustosSerializer
    
    
