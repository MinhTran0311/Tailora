import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>Welcome to Tailora</span>
    </mat-toolbar>

    <div class="content">
      <mat-card class="home-card">
        <mat-card-header>
          <mat-card-title
            >Your AI-Powered Job Application Assistant</mat-card-title
          >
        </mat-card-header>
        <mat-card-content>
          <p>
            Tailora helps you tailor your CV and cover letter using AI, based on
            job descriptions and company insights.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" routerLink="/login">
            Get Started
          </button>
        </mat-card-actions>
      </mat-card>
    </div>

    <footer>
      <p>© 2023 Tailora. All rights reserved.</p>
    </footer>
  `,
  styles: [
    `
      .content {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
      .home-card {
        margin-top: 20px;
      }
      mat-card-content {
        margin: 20px 0;
      }
      footer {
        text-align: center;
        padding: 20px;
        background: #f5f5f5;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    `,
  ],
})
export class HomePageComponent {}
