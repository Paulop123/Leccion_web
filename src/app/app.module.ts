import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Lañon_KevinLoginComponent } from './Lañon_KevinLogin/Lañon_KevinLogin.component';
import { Lanon_KevinCabeceraComponent } from './Lanon_KevinCabecera/Lanon_KevinCabecera.component';
import { Lanon_kevinFooterComponent } from './Lanon_kevinFooter/Lanon_kevinFooter.component';
import { Lanon_KevinRegistrosComponent } from './Lanon_KevinRegistros/Lanon_KevinRegistros.component';
import { Lanon_kevinPaginaInicioComponent } from './Lanon_kevinPaginaInicio/Lanon_kevinPaginaInicio.component';
import { Lanon_KevinEditarRegistroComponent } from './Lanon_KevinEditarRegistro/Lanon_KevinEditarRegistro.component';
import { Lanon_Kevin_AgregarRegistroComponent } from './Lanon_Kevin_AgregarRegistro/Lanon_Kevin_AgregarRegistro.component';


@NgModule({
  declarations: [										
    AppComponent,
    Lañon_KevinLoginComponent,
      Lanon_KevinCabeceraComponent,
      Lanon_kevinFooterComponent,
      Lanon_KevinRegistrosComponent,
      Lanon_kevinPaginaInicioComponent,
      Lanon_KevinEditarRegistroComponent,
      Lanon_Kevin_AgregarRegistroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
