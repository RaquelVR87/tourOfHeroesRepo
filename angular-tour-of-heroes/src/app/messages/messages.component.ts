import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
    // tiene que ser public para q pueda unir las propiedades del componente
   }

  ngOnInit(): void {
  }

}
