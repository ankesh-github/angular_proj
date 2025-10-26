import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    { id: 1, name: "Ramesh", email: "ramesh@gmail.com" },
    { id: 1, name: "Mahesh", email: "mahesh@gmail.com" },
    { id: 1, name: "Narsh", email: "narsh@gmail.com" },
    { id: 1, name: "Suresh", email: "suresh@gmail.com" }
  ]

}
