import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface_Registro_LanonKevin } from '../Lanon_KevinRegistroIinterface/Interface_Registro_LanonKevin';
import { Lanon_Kevin_AgregarRegistroComponent } from '../Lanon_Kevin_AgregarRegistro/Lanon_Kevin_AgregarRegistro.component';
import { Lanon_KevinEditarRegistroComponent } from '../Lanon_KevinEditarRegistro/Lanon_KevinEditarRegistro.component';

@Component({
  selector: 'app-Lanon_KevinRegistros',
  templateUrl: './Lanon_KevinRegistros.component.html',
  styleUrls: ['./Lanon_KevinRegistros.component.css']
})
export class Lanon_KevinRegistrosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombre','apellido','ciudad', 'modificar', 'eliminar']
  
  data= [{
        cedula: '0937827453',
        nombre: 'kevin',      
        apellido: 'Lanon Angulo',
        ciudad: 'Guayaquil',
        
        
      },
      {
        cedula: '0937827453',
        nombre: 'kevin',      
        apellido: 'Lanon Angulo',
        ciudad: 'Guayaquil',
        
        
      },
      {
        cedula: '0937827453',
        nombre: 'kevin',      
        apellido: 'Lanon Angulo',
        ciudad: 'Guayaquil',
        
        
      },
      {
        cedula: '0937827453',
        nombre: 'kevin',      
        apellido: 'Lanon Angulo',
        ciudad: 'Guayaquil',
        
        
      },
      {
        cedula: '0937827453',
        nombre: 'Cesar',      
        apellido: 'Leon Paredes',
        ciudad: 'Guayaquil',
        
        
      },
      
    ];
  
  nuevoPaciente:any;
  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoPaciente = this.nav.extras.state;
  
    if (this.nuevoPaciente != null)
    {      
      console.log(this.nuevoPaciente.datosCliente.queryParams);
      this.data.push(this.nuevoPaciente.datosCliente.queryParams);
    }
    
  };
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Interface_Registro_LanonKevin>(this.data as Interface_Registro_LanonKevin[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(Lanon_Kevin_AgregarRegistroComponent, {
      width: '50%',
    })
  }

  //Modifica registro de una tabla
  openDialogModificar(element: any): void {
    const dialogRef = this.dialog.open(Lanon_KevinEditarRegistroComponent, {
      width: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.data.findIndex(item => item.cedula === element.cedula);
        if (index !== -1) {
          this.data[index].nombre = result.nuevoNombre;
          this.data[index].apellido = result.nuevaApellido;
          this.data[index].ciudad = result.nuevaCiudad;
          this.dataSource.data = this.data;
        }
      }
    });
  }
  
  

  //Elimina un registro de la tabla
  eliminarRegistro(index: number) {
    this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Interface_Registro_LanonKevin>(this.data as Interface_Registro_LanonKevin[]);
  }

}
