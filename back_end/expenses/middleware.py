import logging
from django.utils.deprecation import MiddlewareMixin
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed

class TokenAuthMiddleware(MiddlewareMixin):
    def process_request(self, request):
        auth_token = request.COOKIES.get('auth_token')
        if auth_token:
            try:
                user_auth_tuple = TokenAuthentication().authenticate_credentials(auth_token)
                request.user = user_auth_tuple[0]
                request.auth = user_auth_tuple[1]
            except AuthenticationFailed:
                logging.warning(f'Authentication failed for token: {auth_token}')
                pass
