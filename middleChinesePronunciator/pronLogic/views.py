from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from django.urls import reverse
from . import views
from .models import charPairing
# Create your views here.

def pron(request):
    #Attempting to get one single word inside the Chinese thing.
    oneTestWord = charPairing.objects.create(chineseChar="囯")
    charPairing.objects.create()
    #oneTestWord.FileField = 
    return render(request, 'middleChinesePronunciator.html',{oneTestWord : "oneTestWord"})
