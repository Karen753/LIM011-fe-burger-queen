import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormsModule}from '@angular/forms'


//firebase  
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';  
import { environment } from '../environments/environment';
import{AngularFireStorageModule}from 'angularfire2/storage'

//servicios
//componentes
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { ClientNameComponent } from './components/client-name/client-name.component';
import { BtnSendComponent } from './components/btn-send/btn-send.component';

import { from } from 'rxjs';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { DataOrderComponent } from './components/data-order/data-order.component';
import { PagesComponent } from './components/pages/pages.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ClientNameComponent,
    BtnSendComponent,
    OptionsMenuComponent,
    ProductsComponent,
    DataOrderComponent,
    PagesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
