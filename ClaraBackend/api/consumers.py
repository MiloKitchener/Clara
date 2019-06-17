from channels.generic.websocket import AsyncWebsocketConsumer
import websockets
import json


class ClaraConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data=None, bytes_data=None):
        json_text_data = json.loads(text_data)
        websocket = await websockets.connect(json_text_data['url'])
        await self.receive_websocket(ws=websocket, field=json_text_data['field'])

    async def send_websocket(self, message):
        await self.send(message)

    async def receive_websocket(self, ws, field):
        while True:
            message = await ws.recv()
            json_message = json.loads(message)
            await self.send_websocket(message=json_message[field])
