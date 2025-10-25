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
  username="";

  getUserName(event:Event){
    //this.username = (event.target as HTMLInputElement).value;

  }

  setUserName(){
    this.username="Peter";
  }

  getUserNameWithTemplate(val : string){
    this.username=val;
    console.log(val);
  }
}
