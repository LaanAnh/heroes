import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import{ DataService } from '../data.service';

@Component({
  selector: 'app-hoachau',
  templateUrl: './hoachau.component.html',
  styleUrls: ['./hoachau.component.css']
})
export class HoachauComponent implements OnInit {
  flowerList: object [];
  constructor(private messageService:MessageService, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getList("hoachau").subscribe(res => {
       this.flowerList=<object[]>res;});
  }
  onDetail(flowerList:string) {
    this.messageService.showMessage(flowerList);
  }

}
