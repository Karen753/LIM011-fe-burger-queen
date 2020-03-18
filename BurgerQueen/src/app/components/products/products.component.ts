import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"
import { element } from 'protractor';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
allproducts: any[] = [];

productFilter: any[];
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getProducts().subscribe({
      next: (value) => {
        this.allproducts = value
        console.log(this.allproducts);
      }         
    });
    this.firebaseService.currentProduct.subscribe({
      next: ((values: string) => {
        this.productFilter = this.allproducts.filter((element) => element.category === values)
        console.log(this.productFilter);
        
      })
    })
  }


  
//   products(){
 
  
// }

}
