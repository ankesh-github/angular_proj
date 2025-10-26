import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  color= 'red';
  fontSizeNormal="50px";
  fontSizeBig="60px";
  zoom=true;
  size=60

  zoomToggle(){
    this.zoom =!this.zoom;
  }
}
