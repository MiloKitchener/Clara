import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../classes/event';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket: socketIo;

  constructor() { }

  public initSocket(url: string): void {
    this.socket = socketIo(url);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('message', (data: string) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
