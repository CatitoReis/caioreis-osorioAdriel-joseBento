from dataclasses import fields
from rest_framework import serializers
from Flores.models import Flores

class FloresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flores
        fields = ['id', 'nome', 'link', 'descricao', 'preco']
