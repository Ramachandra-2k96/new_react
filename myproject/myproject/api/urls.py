from rest_framework.routers import DefaultRouter
from myapp.api.urls import project_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(project_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]