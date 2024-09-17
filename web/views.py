from django.shortcuts import render


# Create your views here.


def index(request, resource = None):
    return render(request, "web/index.html")
