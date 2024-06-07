from rest_framework.viewsets import ModelViewSet
from ..models import Projects
from .serializers import ProjectsSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer