import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore'
import { from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
   private categoryValue = new BehaviorSubject('bebidas');
   currentProduct = this.categoryValue.asObservable();

  constructor(private firestore: AngularFirestore) { }

  getProducts(){
    // todo el return me devuelve un observable;
    return this.firestore.collection('products')
      .valueChanges()
  }


  updateCategory(category: string) {
    this.categoryValue.next(category);
    console.log(this.categoryValue.getValue());
  }
  
//   filterOptions(arg){
//     this.getProducts().subscribe({
//    next: ((values) => {
//   this.filterProducts = values.filter((algo) => algo === this.updateOption(options))

  
// })
// })
// }
};