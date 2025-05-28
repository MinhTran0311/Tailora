import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      [
        { path: '', component: HomePageComponent },
        { path: 'login', component: LoginPageComponent },
        { path: '**', redirectTo: '' },
      ],
      withComponentInputBinding()
    ),
    provideAnimations(),
    provideHttpClient(),
  ],
};
