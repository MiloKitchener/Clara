from channels.generic.websocket import WebsocketConsumer
import json
import websocket


# def on_message(message):
#     # while True:
#     #     async for message in websocket:
#     # await self.send_websocket(message=message)
#     print(message)

def on_message(ws, message):
    print(message)


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


class ClaraConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        self.close()

    def receive(self, text_data=None, bytes_data=None):
        print(text_data)
        json_text_data = json.loads(text_data)
        # websocket.enableTrace(True)
        # ws = websocket.WebSocketApp(
        #     json_text_data['datasets']['api_url'],
        #     on_message=on_message,
        #     on_error=on_error,
        #     on_close=on_close
        # )
        # ws.on_open = ws.send(text_data)
        # ws.run_forever()

    def send_websocket(self, message):
        self.send(message)
