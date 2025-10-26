import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { Header } from "./header/header";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name= new FormControl();
  // password = new FormControl();
  // email = new FormControl();

  name= new FormControl("abc");
  password = new FormControl("abc123");
  email = new FormControl("abc@gmail.com");


  getValue(){
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.password.value);
  }

  setValue(){
    this.name.setValue("ankesh");
    this.password.setValue("12345");
    this.email.setValue("ankesh@gmail.com");
   
  }
 
}
