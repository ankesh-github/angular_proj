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
  color = "green";
  handleColor(val : string){
    this.color=val; 
  }

  changeColor(event : Event){
    this.color = (event.target as HTMLInputElement).value;
  }
 
}
