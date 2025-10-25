import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
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
  userName = signal('Ram');
  count=signal(0);
  displayHeading=false;

  constructor(){
    effect(()=>{
      if(this.count()==2){
        this.displayHeading=true;
        setTimeout(()=>{
          this.displayHeading=false;
        })
      }else{
        this.displayHeading=false;
      }
    })
  }
}
