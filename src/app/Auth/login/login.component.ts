import { Component } from '@angular/core';
import { AuthFormComponent } from "../auth-form/auth-form.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [AuthFormComponent,CommonModule,RouterModule]
})
export class LoginComponent {
  title = "Login"
  fields = [
    { label: 'Email', type:'text' , placeholder: 'Enter your email' },
    { label: 'Password', type:'password' , placeholder: 'Enter your password' },
  ];
}
