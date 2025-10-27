import { Component } from '@angular/core';
import { } from '@angular/forms';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData: any;
  constructor(private productService: Product) {
  }

  ngOnInit() {
    console.log("ngOnInIt method called");
    this.productService.productList().subscribe(
      (data:any) => {
        console.log(data);
        this.productData=data.products;
      }
    );
  }

}
