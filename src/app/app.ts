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
  
  handleEvent(event : Event){
    console.log("function called", event.type)
    console.log("function called", (event.target as HTMLInputElement).className);
        console.log("function called", (event.target as HTMLInputElement).value);

  }
  
}
