import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  compradores:number = 1;
  boletos:number = 1;
  boletosPosibles:number = this.compradores * 7;
  total:number = 0;
  precio:number = 12.00;
  tarjeta: string = '';

  procesar() {
    if (this.boletos < 3) {
      if (this.tarjeta == 'no') {
        this.total = this.boletos * this.precio;
      } else 
      if (this.tarjeta == 'si') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1);
      }
      
    } else
    if (this.boletos > 2 && this.boletos < 6) {
      if (this.tarjeta == 'no') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1);
      } else 
      if (this.tarjeta == 'si') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1) - (((this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1)) * 0.1);
      }

      ;
    } else
    if (this.boletos > 5) {
      if (this.tarjeta == 'no') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15);
      } else 
      if (this.tarjeta == 'si') {
        this.total =(this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15) - (((this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15)) * 0.1);
      }

      
    }
  }

  salir() {

  }
}
