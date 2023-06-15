import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lanon_kevinPaginaInicioComponent } from './Lanon_kevinPaginaInicio/Lanon_kevinPaginaInicio.component';
import { Lanon_KevinRegistrosComponent } from './Lanon_KevinRegistros/Lanon_KevinRegistros.component';

const routes: Routes = [

  {path:'', component: Lanon_kevinPaginaInicioComponent},
  {path:'Lanon_kevinPaginaInicio', component: Lanon_kevinPaginaInicioComponent},
  {path:'Lanon_KevinRegistros', component: Lanon_KevinRegistrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
