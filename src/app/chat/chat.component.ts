import { Component } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  chatContent: string = "";
constructor(private chatService: ChatService) {
}

addChat() {
  this.chatService.addMessage(this.chatContent);
  setTimeout(() => {
    this.chatContent = '';
  }, 500);
}
}
