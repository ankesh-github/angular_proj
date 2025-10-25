import { Component, effect, signal } from '@angular/core';
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
  data = 100;
  count = signal(10);

  constructor() {
    effect(() => {
      console.log(this.count());
    })
  }

  updateValue(value: string) {
    //this.data=200;
    if (value == 'des') {
      this.count.set(this.count() - 1);
    }
    else {
      this.count.set(this.count() + 1);

    }
  }


}
