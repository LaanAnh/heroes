import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

   flowerList: object [];
   flowerNew: object[];
   constructor() { }

getList() {
  this.flowerList = [
      {
    name: "Hoa Sen",
    img: "assets/images1.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
  {
    name: "Hoa Hong",
    img: "assets/images2.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
  {
    name: "Hoa Tulip",
    img: "assets/images3.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
  {
    name: "Hoa Tulip",
    img: "assets/images3.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
];
     return this.flowerList;
}

getList2() {
    this.flowerNew = [
      {
    name: "Hoa Sen",
    img: "assets/images1.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
  {
    name: "Hoa Hong",
    img: "assets/images2.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },
  {
    name: "Hoa Tulip",
    img: "assets/images3.jpg",
    description: "hoa sen cũng trở thành một loài hoa tặng được yêu thích bởi những ý nghĩa biểu đạt của nó..."
  },

  ];
    return this.flowerNew;
}


}
