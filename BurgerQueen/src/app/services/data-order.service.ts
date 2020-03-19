import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {
clientName: string;
 public arrayFilterProducts: any[];
 private arrayOrder = new BehaviorSubject([]);
 currentOrder = this.arrayOrder.asObservable();

  constructor() { }
  saveClientName(name){
    this.clientName = name;
   // console.log(this.clientName);
  }
   addProductOrder(value) {
     this.arrayOrder.next(value);
   }
  
}

