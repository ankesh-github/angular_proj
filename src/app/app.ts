import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {} from '@angular/forms';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(){
    console.log("constructor");
  }

  ngOnInIt(){
    console.log("ngOnInIt");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }



}
