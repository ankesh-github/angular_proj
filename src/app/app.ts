import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  display = true;
  val = 10;
  displayOneDiv=true;

  hide(){
    this.display = false;
  }

  show(){
    this.display = true;
  }

  toggle(){
    this.display =! this.display;
  }

  toggleDivs(){
    this.displayOneDiv =! this.displayOneDiv;
  }

 
}
