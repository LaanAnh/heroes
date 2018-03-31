import { Component, OnInit } from '@angular/core';
import{ MessageService } from '../message.service';
import{ DataService } from '../data.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  flowerNew:object [];
  constructor(private messageService: MessageService, private dataService: DataService) { }

  ngOnInit() {
    this.flowerNew = this.dataService.getList2();
  }
  onNew(flowerNew:string){
    this.messageService.showMessage(flowerNew);
  }

}
