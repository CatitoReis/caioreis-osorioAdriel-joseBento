from dataclasses import fields
from rest_framework import serializers
from Arbustos.models import Arbustos


class ArbustosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arbustos
        fields = ['id', 'nome', 'link', 'descricao', 'preco']



