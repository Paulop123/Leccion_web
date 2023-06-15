import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-Lanon_KevinEditarRegistro',
  templateUrl: './Lanon_KevinEditarRegistro.component.html',
  styleUrls: ['./Lanon_KevinEditarRegistro.component.css']
})
export class Lanon_KevinEditarRegistroComponent implements OnInit {

  // Variables para modificar los datos
  nuevaCedula: string
  nuevoNombre: string;
  nuevaApellido: string;
  nuevaCiudad: string;


  constructor(
    public dialogRef: MatDialogRef<Lanon_KevinEditarRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Asignar los valores iniciales de los campos de modificación
    this.nuevaCedula = data.cedula;
    this.nuevoNombre = data.nombre;
    this.nuevaApellido = data.apellido;
    this.nuevaCiudad = data.ciudad;

  }

  // Función para guardar los cambios y cerrar el diálogo
  guardarCambios(): void {
    // Aquí puedes realizar las acciones necesarias para guardar los cambios en el registro
    // Puedes acceder a los nuevos valores a través de las variables: this.nuevoNombreDueno, this.nuevaNombreMascota, etc.

    // Cerrar el diálogo y pasar los datos modificados al componente padre
    this.dialogRef.close({
      nuevaCedula: this.nuevaCedula,
      nuevoNombre: this.nuevoNombre,
      nuevaApellido: this.nuevaApellido,
      nuevaCiudad: this.nuevaCiudad
     
    });
  }

  // Función para cancelar y cerrar el diálogo sin guardar cambios
  cancelar(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}

}
