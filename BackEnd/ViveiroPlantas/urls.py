"""ViveiroPlantas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,  include

from rest_framework import routers

from Arbustos.views import ArbustosViewSet
from Arvores.views import ArvoresViewSet
from Flores.views import FloresViewSet
from Plantas_Medicinais.views import PlantasMedicinaisViewSet
from Sementes.views import SementesViewSet








router = routers.DefaultRouter()
router.register(r'arbustos', ArbustosViewSet)
router.register(r'arvores',  ArvoresViewSet)
router.register(r'flores',  FloresViewSet)
router.register(r'plantas-medicinais', PlantasMedicinaisViewSet)
router.register(r'sementes', SementesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    
]
