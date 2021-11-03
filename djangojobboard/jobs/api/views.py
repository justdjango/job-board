from rest_framework import serializers
from rest_framework.generics import ListAPIView, CreateAPIView
from djangojobboard.jobs.models import Job
from .serializers import JobSerializer


class JobListView(ListAPIView):
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.all()


class JobCreateView(CreateAPIView):
    serializer_class = JobSerializer
