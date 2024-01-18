import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,AuthFormComponent,RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
   fields = [
    { label: 'Email', type:'email' , placeholder: 'Enter your email' },
    
  ];

  isPopupOpen = false; 
   openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
