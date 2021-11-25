#!/bin/sh

python manage.py migrate
gunicorn config.wsgi --bind=0.0.0.0:80