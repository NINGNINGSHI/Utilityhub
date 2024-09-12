from rest_framework.response import Response
from rest_framework.views import APIView


class MessageView(APIView):
    def get(self, request):
        return Response({"message": "Hello, this is a message from the get test!"})
