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
  title ="Hoa ban chay";
  constructor( private messageService: MessageService, private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getList("banchay").subscribe(res => {//console.log("Data", res);
    this.flowerList =<object []>res;});
    //  this.flowerList = this.dataService.getList();
  }

  onDetail(flowerList:string) {
    // alert("Selected: " + flowerName);
    this.messageService.showMessage(flowerList);
  }
}
