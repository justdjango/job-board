from django.db import models


class Job(models.Model):
    title = models.CharField(max_length=100)

    location = models.CharField(max_length=50)
    remote = models.BooleanField(default=False)
    salary = models.PositiveIntegerField()

    date_created = models.DateTimeField(auto_now_add=True)
    available = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.title
