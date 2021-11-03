from rest_framework.serializers import ModelSerializer
from djangojobboard.jobs.models import Job


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = (
            "title",
            "location",
            "remote",
            "salary",
            "date_created",
        )
