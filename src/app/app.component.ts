import { Component } from '@angular/core';
import { LoginComponent } from "./Auth/login/login.component";
import { SignUpComponent } from "./Auth/sign-up/sign-up.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'Home',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [LoginComponent, SignUpComponent]
})

export class AppComponent {
  title = 'Area-BCM';
}
