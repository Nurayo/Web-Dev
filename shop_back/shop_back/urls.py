from django.contrib import admin
from django.urls import path, include 
from rest_framework import routers
from api.views import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
    *router.urls  
]
