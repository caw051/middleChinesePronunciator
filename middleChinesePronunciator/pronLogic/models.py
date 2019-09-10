from django.db import models

# Create your models here.

class charPairing(models.Model):
    chineseChar = models.CharField(max_length=200) #CharFields allow Chinese chars
    corrAudio = models.FileField()



    def __str__(self):
        return self.chineseChar

