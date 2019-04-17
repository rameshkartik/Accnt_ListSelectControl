import { Component } from '@angular/core';
import { MessageService } from '../services/index';
import { ListItem } from '../model/listitem';
import { Observable } from 'rxjs';

@Component({
  // selector: 'app-root',
  templateUrl: './listselect.component.html',
  // styleUrls: ['./listselect.component.css']
})
export class ListSelectComponent {
  title = 'ListSelectComponent';
  listItem :ListItem[];
  

  constructor(private messageService:MessageService) {
    
    //this.links = ["Item_A","Item_B"]
    this.listItem = messageService.populateListItem();
    // this.ItemsAdd = messageService.getMessage();
  }

  sendMessage():void  {
    alert("sendMsgClicked");
    this.messageService.sendMessage("Message from listselect component to AppComponent");

  }

  selectedListItem(item:ListItem):void {
    this.messageService.selectedListItem({id:item.id,description:item.description});
  }

  clearMessages():void {
    this.messageService.clearMessage("Message from listselect component to AppComponent");
  }
  
}
