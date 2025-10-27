import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { } from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import { User } from "./user/user";
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData: { name: string, category: string, price: number }[] | undefined;
  constructor(private productService: Product) {
  }

  // ngOnInit(){
  //   console.log(this.productService.getProductData());
  //   this.productData=this.productService.getProductData();
  // }

  getData() {
    this.productData = this.productService.getProductData();
  }

}
