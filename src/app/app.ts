import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
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
  //data = signal< number | string>(10);
  data : WritableSignal< number> = signal(10);
  count : Signal<number>=computed(()=>20);

  updateValue(){
    //this.data.set("Hello");
    this.data.update(val=> val+10);
  }
}
