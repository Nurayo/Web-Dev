from django.urls import path
from .views import ProductViewSet, CategoryViewSet # type: ignore
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls
