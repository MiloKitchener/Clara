from channels.routing import ProtocolTypeRouter, URLRouter
import ClaraBackend.api.routing

application = ProtocolTypeRouter({
    "websocket": URLRouter(
        ClaraBackend.api.routing.websocket_urlpatterns
    ),
})
