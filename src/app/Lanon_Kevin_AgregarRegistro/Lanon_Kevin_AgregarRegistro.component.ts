import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-Lanon_Kevin_AgregarRegistro',
  templateUrl: './Lanon_Kevin_AgregarRegistro.component.html',
  styleUrls: ['./Lanon_Kevin_AgregarRegistro.component.css']
})
export class Lanon_Kevin_AgregarRegistroComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<Lanon_Kevin_AgregarRegistroComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  pacienteNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.pacienteNuevo.value.cedula,
        nombre: this.pacienteNuevo.value.nombre,
        apellido: this.pacienteNuevo.value.apellido,
        ciudad: this.pacienteNuevo.value.ciudad
        
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/Lanon_KevinRegistros', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
