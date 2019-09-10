from django.urls import path
from . import views
urlpatterns = [
    path('', views.pron, name='pron'),
    #path('add', views.add, name='add') #name is useful for reverse() primarily; will check up another time for further knowledge.

    #The TLDR is that with reverse(), you get an URL in the template language through the name that is provided inside the path, in this case, either 'calculate' or 'add'.
]
