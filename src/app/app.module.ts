import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { ChangeComponent } from './components/change/change.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { AnimesComponent } from './components/animes/animes.component';

const firebaseConfig = {
  apiKey: "AIzaSyCmMSQdZ0KYFetuS6Qb_seQcEsCgJA3UIY",
  authDomain: "crud-angular-d9e51.firebaseapp.com",
  projectId: "crud-angular-d9e51",
  storageBucket: "crud-angular-d9e51.appspot.com",
  messagingSenderId: "717358379262",
  appId: "1:717358379262:web:4f3ac28c8fdc12ca7235af"
};

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ForgotComponent,
    ChangeComponent,
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    AnimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
