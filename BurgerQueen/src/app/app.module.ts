import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ConexionService } from './services/conexion.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { ClientNameComponent } from './components/client-name/client-name.component';
import { ButtonSendComponent } from './components/button-send/button-send.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ClientNameComponent,
    ButtonSendComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [
    ConexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
