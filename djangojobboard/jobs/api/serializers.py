from rest_framework.serializers import ModelSerializer
from djangojobboard.jobs.models import Job


class JobSerializer(ModelSerializer):
    class Meta:
        model = Job
        fields = (
            "id",
            "title",
            "company_name",
            "company_website",
            "company_logo",
            "location",
            "remote",
            "salary",
            "available",
            "user",
            "date_created",
            "sponsored",
        )
        read_only_fields = ("date_created", "user")
