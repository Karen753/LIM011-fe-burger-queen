import { Component, OnInit } from '@angular/core';
import { DataOrderService } from "src/app/services/data-order.service";

@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.scss']
})

export class DataOrderComponent implements OnInit {
  indice: number;
  quantityProducts: number;
  arrOrderProducts: any[];
  totalPrice: number = 0;
  constructor(private dataOrderService: DataOrderService) {
  }

  ngOnInit(): void {
    //console.log(this.itemOrder);
    this.dataOrderService.currentOrder.subscribe({
      next: (value) => {
        console.log(value);

        this.arrOrderProducts = value
        console.log(this.arrOrderProducts);

        this.addTotalPrice()
       }
    });


  }


  addProducts(itemd) {

    this.indice = this.arrOrderProducts.indexOf(itemd);


    this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity + 1;
    this.arrOrderProducts[this.indice].data.price = this.arrOrderProducts[this.indice].data.price;
  }



  subtractProducts(obj) {
    this.indice = this.arrOrderProducts.indexOf(obj)
    console.log(obj);

    if (this.arrOrderProducts[this.indice].quantity >= 1) {
      this.arrOrderProducts[this.indice].quantity = this.arrOrderProducts[this.indice].quantity - 1;
    }
    if (this.arrOrderProducts[this.indice].quantity === 0) {
      this.deleteProduc(obj)
    }


  }

  deleteProduc(obj) {
    const indice = this.arrOrderProducts.findIndex((element) => element.id === obj.id);
    //console.log(positionProduc);
    if (indice !== -1) {
      this.arrOrderProducts.splice(indice, 1);
    }

  }
  addTotalPrice() {
    this.totalPrice = 0;
    this.arrOrderProducts.forEach((element) => {
      const subtotal = element.quantity * element.data.price
      this.totalPrice += subtotal;
      // this.arrOrderProducts.forEach((element) => {
      if (element.Queso === true && element.Huevo === true) {
        const priceExtra = element.priceExtraTwo * element.quantity;
        this.totalPrice += priceExtra;
        console.log(priceExtra);
      }
      if (element.Queso === true && element.Huevo === undefined) {
        const priceExtra = element.priceExtra * element.quantity;
        this.totalPrice += priceExtra;
      }
      if (element.Huevo === true && element.Queso === undefined) {
        const priceExtra = element.priceExtra * element.quantity;
        this.totalPrice += priceExtra;
      }
      // })
    })
  }


}

