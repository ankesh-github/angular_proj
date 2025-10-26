import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students=["Ramesh","Mahesh","Suresh"];

  studentData=[
    {name:"Ramesh",age:"32",email:"ramesh@gmail.com"},
    {name:"Mahesh",age:"34",email:"mahesh@gmail.com"},
    {name:"Suresh",age:"30",email:"suresh@gmail.com"},
    {name:"rajesh",age:"38",email:"rajesh@gmail.com"},
  ]
  
}
