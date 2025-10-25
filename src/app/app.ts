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
  data = computed(()=>20);
  count = signal(20);

  x=signal(20);
  y=signal(30);
  z=computed(()=> this.x() + this.y());

  updateValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }

  updateXValue(){
    this.x.set(1000);
  }
}
