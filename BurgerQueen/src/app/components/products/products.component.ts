import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
productos: any[];
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }
  m(){
 this.firebaseService.getProducts().subscribe({
  next: (values) => {
    this.productos = values
    console.log(this.productos);
  }         
});
  
}

}
