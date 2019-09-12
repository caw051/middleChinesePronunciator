from django.db import models

# Create your models here.

class charPairing(models.Model):
    chineseChar = models.CharField(max_length=200) #CharFields allow Chinese chars

    #media/documents/%Y/%m/%d
    corrAudio = models.FileField(upload_to='documents/%Y/%m/%d') #To add files as needed


    #So how is this supposed to tie together with the database version of the word?
    #How do I actually play it?
    def __str__(self):
        return self.chineseChar

