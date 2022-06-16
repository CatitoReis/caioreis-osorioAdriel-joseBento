from dataclasses import fields
from rest_framework import serializers
from Sementes.models import Sementes

class SementesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sementes
        fields = ['id', 'nome', 'link', 'descricao', 'preco']
