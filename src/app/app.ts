import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profileForm =new FormGroup({
    name:new FormControl('abc'),
    email:new FormControl('abc@gmail.com'),
    password:new FormControl('abc123'),

  });

  submitData(){
    console.log(this.profileForm.value)
  }

  setValue(){
    this.profileForm.setValue({
      name:'peter',
      email:'peter@gmail.com',
      password:'pass123'
    })
  }


}
