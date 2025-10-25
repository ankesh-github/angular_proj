import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "This is demo for angular project";
  name : string = "Ankesh Tiwari";
  data=100;
  data2=200;
}
