from channels.generic.websocket import AsyncWebsocketConsumer
import websockets


class ClaraConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        websocket = await websockets.connect('ws://35.182.196.173:81/ws/matrix/')
        await self.receive_websocket(ws=websocket)

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data=None, bytes_data=None):
        pass

    async def send_websocket(self, message):
        await self.send(message)

    async def receive_websocket(self, ws):
        while True:
            message = await ws.recv()
            await self.send_websocket(message=message)
