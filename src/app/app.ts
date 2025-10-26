import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
