import { Component, OnInit } from '@angular/core';
import{ MessageService } from '../message.service';
import{ DataService } from '../data.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  flowerList: object[];
  title="Khuyen Mai";
  constructor(private messageService: MessageService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getList("sale").subscribe(res=>{
      this.flowerList = <object[]> res;})
  }
  onDetail(flowerList:string){
    this.messageService.showMessage(flowerList);
  }

}
