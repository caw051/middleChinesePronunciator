from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from django.urls import reverse
from . import views
from .models import charPairing

# Create your views here.

#Precisely for the purpose of displaying the UI at first glance.
def pron(request):
    chineseWord = request.POST.get('charsToGet', False)
    #Attempting to get one single word inside the Chinese thing.
    oneTestWord = charPairing.objects.create(chineseChar=chineseWord, corrAudio="documents/2019/09/11/01_023.mp3")

    #oneTestWord.corrAudio = "documents/2019/09/11/01_023.mp3"

    return render(request, 'middleChinesePronunciatorSimplified.html')
    #return render(request, 'middleChinesePronunciator.html',{"oneTestWord.chineseChar": oneTestWord.chineseChar})



#What should be done after pressing Play; it should be getting that one word,
#creating an object of it(and finding the pronunciation for it), and then
#returning render. 

#My guess is that it is to be called inside the views method to actually get this done as needed.
def play(request):
    #My guess is that I'd have to probably play it again.
    chineseWord = request.post["charsToGet"]


    
        
    
