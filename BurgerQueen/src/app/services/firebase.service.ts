import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getProducts(){
    //return this.firestore.collection('products').snapshotChanges();
   return this.firestore.collection('products')
      .valueChanges()
    
    
  }

}
