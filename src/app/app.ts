import { Component } from '@angular/core';
import { } from '@angular/forms';
import { Users } from './services/users';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:any;
  constructor(private userService : Users){};

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (data:any)=>{
        console.log(data);
        this.users=data;
      }
    );
  }

}
