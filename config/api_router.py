from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from djangojobboard.users.api.views import UserViewSet
from djangojobboard.jobs.api.views import JobListView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)


app_name = "api"

urlpatterns = [path("jobs/", JobListView.as_view())]

urlpatterns += router.urls
