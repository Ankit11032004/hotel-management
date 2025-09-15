import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import Reactive Forms modules for robust form handling
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Import IonicModule, which provides all Ionic components, and ToastController
import { IonicModule, ToastController } from '@ionic/angular';

// Import ion-icons
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush for better performance
  imports: [
    CommonModule,
    ReactiveFormsModule, // Use ReactiveFormsModule
    RouterLink,
    IonicModule // Import IonicModule here for all Ionic components
  ]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    // Make icons available in the template
    addIcons({ mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline });
  }

  ngOnInit() {
    // Define the form structure and validation rules
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form controls in template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Toggles the visibility of the password field
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Handles the login form submission
  async login(): Promise<void> {
    // Mark all fields as touched to trigger validation messages
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.presentToast('Please fill in all required fields correctly.');
      return;
    }

    console.log('Login Form Submitted:', this.loginForm.value);

    // --- YOUR AUTHENTICATION LOGIC GOES HERE ---
    // Example: Call an authentication service
    // const isAuthenticated = await this.authService.login(this.loginForm.value);
    // if (isAuthenticated) {
    //   this.router.navigateByUrl('/home');
    // } else {
    //   this.presentToast('Invalid email or password.');
    // }

    // For demonstration, we'll navigate directly to the home page on success.
    this.presentToast('Login Successful!', 'success');
    this.router.navigateByUrl('/home');
  }

  // Helper function to display a toast message (better than alert())
  async presentToast(message: string, color: string = 'danger'): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
    });
    toast.present();
  }
}

