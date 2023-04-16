import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './environments/environment';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom([
        BrowserModule , 
        BrowserAnimationsModule , 
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
        ]
        ),
      provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
  

