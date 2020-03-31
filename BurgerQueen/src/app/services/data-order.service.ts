import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataOrderService {
  clientName: string;
  //arrOrder: object[];
  findProducto: [];
  amount:number = 0;
  private arrOrder = new BehaviorSubject([]);
   public currentOrder = this.arrOrder.asObservable();
  public obj: object;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  saveClientName(name) {
    this.clientName = name;
  }
  
  addProductToOrder(obj) {
    const itemObj = {
      ...obj,
      quantity: 1,
      //amount: 0
    };

    const newArrObj = [
      ...this.arrOrder.value,
      itemObj
    ]
    this.arrOrder.next(newArrObj);

}


  
}












