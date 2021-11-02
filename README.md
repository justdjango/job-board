# Django Job Board

Django job board built with Django and React

---

This project is built using [Cookiecutter Django](http://cookiecutter-django.readthedocs.io).

### Getting Started

1. Pull the repository
2. Fetch all details from the repo with `git fetch`
3. Run Git checkout to the **starting-files** branch with `git checkout starting-files`
4. Build the docker image with `docker-compose -f local.yml build`
5. Continue with the installation procedure outlined in the [Cookiecutter Django docs](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html)




### Job Board Planning

- model represents the Job
- view handles users submitting form and creating a job posting/listing
- view displays all of the jobs that are available
- updating a job so that it's no longer available and doesn't show on search results / home page
- users won't be able to "apply" for a position through the website but provide a contact form
- special slot on the site for sponsored job postings
- handle payments for sponsored job postings