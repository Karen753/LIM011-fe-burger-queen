import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

export interface Name { name: string;}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Name>;
  items: Observable<Name[]>;


  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Name>('listOfClients')
    this.items = this.itemsCollection.valueChanges();
}
   AñadirNombre(name: Name) {
    this.itemsCollection.add(name);
  }

  
  
}
