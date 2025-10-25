import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  task="meeting at 10";
  taskList:{id:number, name:string}[]=[];

  addTask(){
    this.taskList.push({id:this.taskList.length+1, name:this.task});
    this.task="";
  }

  deleteTask(id: number){
    this.taskList = this.taskList.filter((item)=>item.id!=id);

  }

}
