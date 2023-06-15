import { Component, OnInit } from '@angular/core';
import { Lañon_KevinLoginComponent } from '../Lañon_KevinLogin/Lañon_KevinLogin.component';
import { Lañon_kevinServicesService } from '../Lañon_KevinServices/Lañon_kevinServices.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Lanon_KevinCabecera',
  templateUrl: './Lanon_KevinCabecera.component.html',
  styleUrls: ['./Lanon_KevinCabecera.component.css']
})
export class Lanon_KevinCabeceraComponent implements OnInit {

  temp:any;
  constructor(private dialog: MatDialog,  private router: Router, public sharedService: Lañon_kevinServicesService ){ }


  /**
   * Metodo de login
   */
  inicioSesion(){

    this.dialog.open(Lañon_KevinLoginComponent)
  }
  
  cerrarSesion(){
    this.sharedService.setTemp(2);
    this.router.navigate(['/Pagina_inicio']);

  }

  ngOnInit() {
  }

}
