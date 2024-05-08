import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment.development';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase)),
  ]
})
