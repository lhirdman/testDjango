from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Rango says hey there <a href='/rango/about/'>world</a>!")

def about(request):
    return HttpResponse("<a href='/rango/'>Rango</a> says here is the about page!")
