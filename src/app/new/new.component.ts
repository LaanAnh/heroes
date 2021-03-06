import { Component, OnInit } from '@angular/core';
import{ MessageService } from '../message.service';
import{ DataService } from '../data.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  flowerList:object [];
  constructor(private messageService: MessageService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getList("new").subscribe(res => {//console.log("Data", res);
      this.flowerList =<object []>res;});

  }
  onDetail(flowerList:string){
    this.messageService.showMessage(flowerList);
  }

}
