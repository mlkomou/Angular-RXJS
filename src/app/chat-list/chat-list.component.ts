import { Component } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
messages: string[] = [];
constructor(private chatService: ChatService) {
  chatService.messages$.subscribe((chatValue) => {
    this.messages = chatValue;
  });
}
}
