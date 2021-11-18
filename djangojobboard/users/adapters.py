from typing import Any

from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.conf import settings
from django.http import HttpRequest


class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request: HttpRequest):
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def send_mail(self, template_prefix, email, context):
        if settings.DEBUG:
            context["activate_url"] = (
                "http://localhost:3000/accounts/confirm-email/" + context["key"]
            )
        else:
            context["activate_url"] = (
                settings.FRONTEND_URL + "/accounts/confirm-email/" + context["key"]
            )
        return super().send_mail(template_prefix, email, context)


class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def is_open_for_signup(self, request: HttpRequest, sociallogin: Any):
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)
