import { Component } from '@angular/core';
import { } from '@angular/forms';
import { Users } from './services/users';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:User[]=[];
  constructor(private userService : Users){};

  ngOnInit(){
    this.userService.getUsers().subscribe(
      (data:User[])=>{
        console.log(data);
        this.users=data;
      }
    );
  }

}
