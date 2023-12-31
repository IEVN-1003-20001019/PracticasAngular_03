import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciaComponent } from './calculos/potencia/potencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';
import { CinepolisComponent } from './calculos/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciaComponent,
    Suma2Component,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    NgFor,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
