from channels.generic.websocket import AsyncWebsocketConsumer
import websockets
import json


class ClaraConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.websocket = websockets.WebSocketClientProtocol

    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        self.websocket.close(self)

    async def receive(self, text_data=None, bytes_data=None):
        json_text_data = json.loads(text_data)
        self.websocket = await websockets.connect(json_text_data['datasets']['api_url'])
        await self.websocket.send(text_data)
        await self.receive_websocket(ws=self.websocket)

    async def send_websocket(self, message):
        await self.send(message)

    async def receive_websocket(self, ws):
        while True:
            async for message in ws:
                await self.send_websocket(message=message)
