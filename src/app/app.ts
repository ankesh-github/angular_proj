import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show=false;
  block=1;
  login=true;

  toggle(){
    this.show =!this.show;
  }

  updateBlock(){
    if(this.block==4){
      this.block=1;
    }
    else{
    this.block++;
    }
  }

  loginToggle(){
    this.login =! this.login;
  }


  
}
