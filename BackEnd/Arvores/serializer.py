from dataclasses import fields
from rest_framework import serializers
from Arvores.models import Arvores

class ArvoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arvores
        fields = ['id', 'nome', 'link', 'descricao', 'preco']
