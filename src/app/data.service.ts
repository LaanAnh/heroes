import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

   flowerList: object [];
   flowerNew: object[];
   constructor(private httpClient: HttpClient) { }

getList(type: String) {
    return this.httpClient.get("http://localhost:3000/products?type=" +type);
}


}
