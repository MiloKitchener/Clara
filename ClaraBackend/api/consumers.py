from channels.generic.websocket import AsyncWebsocketConsumer
import websockets
import json


class ClaraConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.websocket = None

    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        await self.close()

    async def receive(self, text_data=None, bytes_data=None):
        json_text_data = json.loads(text_data)
        self.websocket = await websockets.connect(json_text_data['datasets']['api_url'])
        await self.websocket.send(text_data)
        await self.receive_websocket()

    async def send_websocket(self, message):
        await self.send(message)

    async def receive_websocket(self):
        while True:
            async for message in self.websocket:
                await self.send_websocket(message=message)
