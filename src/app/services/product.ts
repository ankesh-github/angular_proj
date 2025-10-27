import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(){
    console.log("service call");
  }

  getProductData(){
    return [
      {name:'iPhone',category:'mobile', price:120000},
      {name:'galaxy 525',category:'mobile', price:100000},
      {name:'dell',category:'Laptop', price:160000}
    ]
  }
  
}
