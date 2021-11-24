from re import L
from rest_framework import serializers
from djangojobboard.jobs.models import Job


class JobSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField()

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
            "is_owner",
        )
        read_only_fields = ("date_created", "user")

    def get_is_owner(self, obj):
        user = self.context["request"].user
        return obj.user == user
