from dataclasses import fields
from rest_framework import serializers
from Plantas_Medicinais.models import Plantas_Medicinais

class PlantasMedicinaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plantas_Medicinais
        fields = ['id', 'nome', 'link', 'descricao', 'preco']
