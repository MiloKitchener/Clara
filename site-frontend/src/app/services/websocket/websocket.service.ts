import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket: WebSocket;

  constructor() { }

  async initSocket(url, formData) {
    this.socket = await new WebSocket(url);
    this.socket.onopen = () => {
      this.send(formData);
    };
  }

  public send(message: string) {
    this.socket.send(message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.onmessage = (event) => {
        observer.next(event.data);
      };
    });
  }

  public isOpen() {
    if (this.socket) {
      return this.socket.OPEN;
    }
  }
  public close() {
    this.socket.close();
  }
}
