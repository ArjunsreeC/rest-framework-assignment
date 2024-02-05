from . import models
from django.views.generic import TemplateView
from rest_framework import viewsets,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse,Http404
from django.shortcuts import get_object_or_404

from student_app.models import student
from student_app.serializers import StudentSerializer

class IndexView(TemplateView):
    template_name = 'index.html'


class StudentsViewList(APIView):
    queryset = student.objects.all()
    serializer_class = StudentSerializer

    def get(self, request):
        regno = request.GET.get('regno')
        if regno:
            student_selected = student.objects.get(regno=regno)
            serializer = StudentSerializer(student_selected)
        else:
            students = student.objects.all()
            serializer = StudentSerializer(students, many=True)
        return Response (serializer.data)

    def post(self, request):
        regno = request.GET.get('regno')
        if not regno:
            serializer = StudentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        regno = request.GET.get('regno')
        student_selected = student.objects.get(regno=regno)
        serializer = StudentSerializer(student_selected, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        regno = request.GET.get('regno')
        student_selected = student.objects.get(regno=regno)
        student_selected.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
