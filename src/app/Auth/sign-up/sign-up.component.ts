import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthFormComponent } from "../auth-form/auth-form.component";
import { ModalService } from '../../modal.service';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
  imports: [CommonModule, AuthFormComponent],
    providers: [ModalService] 
})
export class SignUpComponent {


  // Fields

  title = "SignUp";
  fields = [
    { label: 'Company name', placeholder: 'Enter your company', type: 'text' },
    { label: 'Email', placeholder: 'Enter your email', type: 'email' },
    { label: 'Password', placeholder: 'Enter your password', type: 'password' },
    { label: 'Industrial area', placeholder: 'Select industrial area', type: 'dropdown', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Representative name', placeholder: 'Enter your representative name', type: 'text' },
    { label: 'Job title', placeholder: 'Enter your job title', type: 'text' },
    { label: 'Phone number', placeholder: 'Enter your phone number', type: 'tel' },
    // Add more fields as needed
  ];


//  show modal when i click on SignUp btn 
isPopupOpen = false; 
   openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
