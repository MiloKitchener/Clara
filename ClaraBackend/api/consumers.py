from channels.generic.websocket import WebsocketConsumer
from websocket import create_connection
import json


class ClaraConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data=None, bytes_data=None):
        if text_data is not None:
            json_data = json.loads(text_data)
            ws = create_connection('ws://35.182.196.173:81/ws/matrix/')  #json_data['websocket'])

            self.receive_websocket(websocket=ws)

    def send_websocket(self, message):
        self.send(message.payload.decode('utf-8'))

    async def receive_websocket(self, websocket):
        while True:
            message = await websocket.recv()
            await print(message)
            # await self.send_websocket(message)
