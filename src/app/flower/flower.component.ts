import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface flowerData {
  name: string,
  img: string,
  description: string
}

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower: flowerData
  @Output() onDetail = new EventEmitter<string>();
  @Output() onNew = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  onClick() {
    this.onDetail.emit(this.flower.name);
    this.onNew.emit(this.flower.description)
  
  }
}
