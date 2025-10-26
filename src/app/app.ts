import {} from '@angular/common';
import { Component} from '@angular/core';
import {} from '@angular/forms';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName="Bruce";

  changeUser(val : string){
    this.userName=val;
  }

}
