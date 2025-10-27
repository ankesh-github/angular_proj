import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Pipes Demo";
  today = new Date();
  amount=10;

}
