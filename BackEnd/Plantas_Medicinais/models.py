from django.db import models

# Create your models here.
class Plantas_Medicinais(models.Model):


    nome = models.CharField(max_length=100)
    link = models.CharField(max_length=250)
    descricao = models.CharField(max_length=100)
    preco = models.FloatField(max_length=100.2)


def __str__(self):
    return self.id