from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def create_post(request):
    pass

def post_detail(request, post_id):
    pass

def add_comment(request, post_id):
    pass

def like_post(request, post_id):
    pass
