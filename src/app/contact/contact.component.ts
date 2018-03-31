import { Component, OnInit } from '@angular/core';
interface contactData {
  name: string;
  email: string;
  subject: string;
  mess: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title ="Lien he";
  //khởi tạo data
  public data: contactData;

  constructor() { 
    this.data = {
      name: "",
      email: "",
      subject: "",
      mess: "",

    }
  }

  ngOnInit() {
  }
  onClick() {
    let resultString = "Name: " + this.data.name + "\n" ;
        resultString += "Email: " + this.data.email + "\n";
        resultString += "Subject: " + this.data.subject + "\n";
        resultString += "Messeger: " + this.data.mess + "\n";
        alert(resultString);
  }
}
