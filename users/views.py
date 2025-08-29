from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import generics, permissions, status

from .models import User, SuperHost
from .serializers import UserRegisterSerializer, UserSerializer


class UserRegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(
            {
                'message': 'User registered successfully',
                'user': UserSerializer(user, context=self.get_serializer_context()).data
            }
            , status=status.HTTP_201_CREATED)
