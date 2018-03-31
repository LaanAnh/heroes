import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  
  showMessage(message: String) {
    alert("Message: " + message);
  }
}
