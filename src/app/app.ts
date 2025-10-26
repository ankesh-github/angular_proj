import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userData:any;

  addUser(val : NgForm){
    console.log(val);
    this.userData=val;
  }

}
