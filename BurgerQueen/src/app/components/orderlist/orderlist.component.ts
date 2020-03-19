import { Component, OnInit } from '@angular/core';
import { DataOrderService } from 'src/app/services/data-order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
arrProducts: any[];

  constructor(private dataOrderService: DataOrderService) {
    this.dataOrderService.currentOrder
    .subscribe((data) => {
       const arrProductsCopy = {...this.arrProducts }
      this.arrProducts.push({arrProductsCopy.quantity = quantity })
    })
   }

  ngOnInit(): void {
   

  }

}
