from channels.generic.websocket import WebsocketConsumer
import websockets
import json


class ClaraConsumer(WebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.websocket = None

    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        self.websocket.close()
        self.close()

    def receive(self, text_data=None, bytes_data=None):
        json_text_data = json.loads(text_data)
        self.websocket = websockets.connect(json_text_data['datasets']['api_url'])
        self.websocket.send(text_data)
        self.receive_websocket()

    def send_websocket(self, message):
        self.send(message)

    async def receive_websocket(self):
        while True:
            async for message in self.websocket:
                await self.send_websocket(message=message)
