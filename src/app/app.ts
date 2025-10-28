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
  users: User[] = [];
  selectedUser:User | undefined
  constructor(private userService: Users) { };

  ngOnInit() {
    this.getUser();

  }

  getUser() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        console.log(data);
        this.users = data;
      }
    );
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: User) => {
        console.log(data);
        if (data) {
          this.getUser();
        }
      });
    } else {
      const userData={...user, id:this.selectedUser.id};
      this.userService.updateUser(userData).subscribe((data:User)=>{
        console.log(data);
        this.getUser();
      });

    }
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser();
      }
    });
  }

  selectUser(id:string){
    this.userService.getSelectedUser(id).subscribe((data:User)=>{
      console.log(data);
      this.selectedUser=data;
    });
  }

}
