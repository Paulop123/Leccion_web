import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Lañon_kevinServicesService } from '../Lañon_KevinServices/Lañon_kevinServices.service';


@Component({
  selector: 'app-Lañon_KevinLogin',
  templateUrl: './Lañon_KevinLogin.component.html',
  styleUrls: ['./Lañon_KevinLogin.component.css']
})
export class Lañon_KevinLoginComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<Lañon_KevinLoginComponent>, public sharedService: Lañon_kevinServicesService) { }

  alert: boolean = false;

  /**
   * Objeto
   */
  usuarioLogin= new FormGroup({

    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 

 
  ngOnInit() {}

/**
 * Metodo para validar los datos ingresados por el usuario
 */
  ingresoLogin() {

    if (this.usuarioLogin.value.usuario== "kevin" && this.usuarioLogin.value.password=="123") {

      this.sharedService.temp = 1;
      this.router.navigate(['/Lanon_KevinRegistros']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } 

    if (this.usuarioLogin.value.usuario== "sellan" && this.usuarioLogin.value.password=="123") {
      
      this.sharedService.temp = 1;
      this.router.navigate(['/Lanon_KevinRegistros']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } else {

      this.alert= true;
      setTimeout(() => this.alert= false, 4000);
    }
  }

}
