from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from djangojobboard.jobs.models import Job
from .serializers import JobSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated


class JobListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)


class JobCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = JobSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class JobDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.all()


class JobUpdateView(UpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)


class JobDeleteView(DestroyAPIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Job.objects.all()
