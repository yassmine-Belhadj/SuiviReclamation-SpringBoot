import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { routes } from './app.routes'; // Your routing configuration

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      CommonModule, // Import CommonModule for ngFor and other common directives
      RouterModule.forRoot(routes), // Ensure routes are passed here
      HttpClientModule,
      FormsModule, // Add FormsModule for ngModel support
    ),
  ]
};
