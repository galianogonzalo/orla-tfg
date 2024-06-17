import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      "projectId":"orla-tfg",
      "appId":"1:902974360906:web:212560502bf769db3bc5b3",
      "storageBucket":"orla-tfg.appspot.com",
      /* "locationId":"europe-west", */
      "apiKey":"AIzaSyDTvD84KBIgflh_Shp70-CRdAUHrHq-aAQ",
      "authDomain":"orla-tfg.firebaseapp.com",
      "messagingSenderId":"902974360906"})), 
    provideStorage(() => getStorage())]
};
