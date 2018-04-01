import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service';
import{ MessageService } from '../message.service';

@Component({
  selector: 'app-hoatuoi',
  templateUrl: './hoatuoi.component.html',
  styleUrls: ['./hoatuoi.component.css']
})
export class HoatuoiComponent implements OnInit {
  flowerList: object[];
  title="Hoa tuoi";
  constructor(private dataService: DataService, private messageService: MessageService) { }

  ngOnInit() {
    this.dataService.getList("hoatuoi").subscribe(res => {
      this.flowerList =< object[] > res;});
  }
 onDetail(flowerList:string){
   this.messageService.showMessage(flowerList);
 }
}
