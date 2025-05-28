import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Login to Tailora</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input
                matInput
                formControlName="email"
                placeholder="Enter your email"
              />
              <mat-error *ngIf="loginForm.get('email')?.hasError('required')"
                >Email is required</mat-error
              >
              <mat-error *ngIf="loginForm.get('email')?.hasError('email')"
                >Please enter a valid email</mat-error
              >
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Password</mat-label>
              <input
                matInput
                type="password"
                formControlName="password"
                placeholder="Enter your password"
              />
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')"
                >Password is required</mat-error
              >
              <mat-error
                *ngIf="loginForm.get('password')?.hasError('minlength')"
                >Password must be at least 6 characters</mat-error
              >
            </mat-form-field>

            <button
              mat-raised-button
              color="primary"
              type="submit"
              [disabled]="!loginForm.valid"
              class="full-width"
            >
              Login
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .login-container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
      }
      .login-card {
        max-width: 400px;
        width: 100%;
        margin: 20px;
      }
      .full-width {
        width: 100%;
        margin-bottom: 15px;
      }
      mat-card-header {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
    }
  }
}
