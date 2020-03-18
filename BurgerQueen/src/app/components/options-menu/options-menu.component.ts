import { Component, OnInit } from '@angular/core';
import{FirebaseService} from "src/app/services/firebase.service"

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
 bebidas: any[];
//  menu: any[];
//  adicional: any[];
  constructor( private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  sourceProducts(category){
    this.firebaseService.updateCategory(category)
   console.log(category);
   
    
  }
    

  }

 
  // bebidasOption(){
  //   this.firebaseService.getProducts().subscribe({
  //     next: (values) => {
  //       this.bebidas = values 
  //       console.log(this.bebidas);
  //      values = [];
        
  //     }
  //   })
  //   }
  //   menuOption(){
  //     this.firebaseService.getProducts().subscribe({
  //       next: (values) => {
  //         this.menu = values 
  //         console.log(this.bebidas);
          
  //       }
  //     })
  //     }
