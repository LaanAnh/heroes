import { Component, OnInit, } from '@angular/core';
import { MessageService } from '../message.service';
import{ DataService } from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  flowerList : object [];
  constructor( private messageService: MessageService, private dataService: DataService) { }

  ngOnInit() {
     this.flowerList = this.dataService.getList();
  }

  onDetail(flowerName:string) {
    // alert("Selected: " + flowerName);
    this.messageService.showMessage(flowerName);
  }
}
