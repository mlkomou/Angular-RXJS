import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
private chatSuject = new BehaviorSubject<string[]>([]);
messages$ = this.chatSuject.asObservable();
  constructor() { }

  addMessage(message: string) {
    let currentMessages: string[] = this.chatSuject.value;
    currentMessages.push(message);
    this.chatSuject.next(currentMessages);
  }
}
