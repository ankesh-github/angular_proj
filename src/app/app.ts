import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profileForm =new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.min(5)]),
    password:new FormControl('', [Validators.required, Validators.maxLength(10)]),

  });

  submitData(){
    console.log(this.profileForm.value)
  }

  get name(){
    return this.profileForm.get('name');
  }

  get email(){
    return this.profileForm.get('email');
  }

  get password(){
    return this.profileForm.get('password');
  }


  setValue(){
    this.profileForm.setValue({
      name:'peter',
      email:'peter@gmail.com',
      password:'pass123'
    })
  }


}
