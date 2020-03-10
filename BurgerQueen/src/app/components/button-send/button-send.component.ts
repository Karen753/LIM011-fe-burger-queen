import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-button-send',
  templateUrl: './button-send.component.html',
  styleUrls: ['./button-send.component.scss']
})
export class ButtonSendComponent implements OnInit {

  Name:any = {
    name:''
  }  


  constructor( private service: ConexionService) { }


  ngOnInit(): void {
  }
  agregar(){
    // this.service.AñadirNombre();
  }

}
