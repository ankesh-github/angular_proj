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
  users = ['Shyam','Ram','Laxman','Bharat'];
  students = [
    {name:'Shyam', age:20, email:'shyam@gmail.com'},
    {name:'Ram', age:22, email:'ram@gmail.com'},
    {name:'Laxman', age:25, email:'laxman@gmail.com'},
    {name:'Bharat', age:23, email:'bharat@gmail.com'},

  ]

  getName(name : string){
    console.log(name);
  }
}
