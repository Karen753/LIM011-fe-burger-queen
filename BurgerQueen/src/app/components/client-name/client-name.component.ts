import { Component, OnInit } from '@angular/core';
import { DataOrderService } from 'src/app/services/data-order.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrls: ['./client-name.component.scss']
})
export class ClientNameComponent implements OnInit {
   
  nameForm = new FormGroup({
    nameValue: new FormControl('')
  });
  

  constructor(private dataOrderService: DataOrderService) { }

  ngOnInit(): void {
  }

  captureName(){
    console.log(this.nameForm.value.nameValue);
    this.dataOrderService.saveClientName(this.nameForm.value.nameValue); 
  }

}
