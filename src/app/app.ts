import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from './services/users';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users:User[]=[];
  constructor(private userService : Users){};

  ngOnInit(){
    this.getUser();
    
  }

  getUser(){
    this.userService.getUsers().subscribe(
      (data:User[])=>{
        console.log(data);
        this.users=data;
      }
    );
  }

  addUser(user: User){
    console.log(user);
    this.userService.saveUsers(user).subscribe((data: User)=>{
      console.log(data); 
      if(data){
        this.getUser();
      }
    });

  }

}
