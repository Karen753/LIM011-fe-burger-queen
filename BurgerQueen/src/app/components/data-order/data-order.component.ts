import { Component, OnInit } from '@angular/core';
import {DataOrderService}from "src/app/services/data-order.service";
import { from } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {
  
  quantityProducts : number;
  itemOrder: any [];
   valorany:any;
  constructor(private dataOrderService: DataOrderService) {
   this.dataOrderService.currentOrder.subscribe({
     next:(value => {
      this.itemOrder = value 
      
     } 
      )    
   })
   }

  ngOnInit(): void {
  
  }
  addProducts(itemd){
    //console.log("hola aqui");
    let arrayproduc = [];
    let ObjPro ={}
 const arreglo:[]= this.itemOrder.find(element=>{ 
  //console.log(itemd.item.name);
   return itemd.name === element.name  
 }) 

//   if(!arreglo){
// arrayproduc = this.itemOrder.concat(itemd)
//  }
 if(arreglo){
arrayproduc = this.itemOrder.map((element)  => {
  let objetnew: {}
  let objetnew2: {}
  if(itemd.name === element.name){
    objetnew = {
      name: element.name,
      price: element.price,
      cantidad: element.cantidad + 1
    }
    return objetnew;
  }else{
    return objetnew2 = {
      ...objetnew,
      name:element.name,
      price: element.price,
      cantidad: element.cantidad +1
    }
  }
})

 }
 console.log(arrayproduc);
 
 

return this.itemOrder = arrayproduc;


  }



  subtract(item){

  }
  
  
}
