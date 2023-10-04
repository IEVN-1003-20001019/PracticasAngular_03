import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent {
  nombre: string = '';
  compradores:number = 0;
  boletos:number = 0;
  boletosPosibles:number = 0;
  total:number = 0;
  mensajeError: string = '';
  mensajeDescuento: string = '';
  precio:number = 12.00;
  tarjeta: string = '';
  salida: boolean = false;
  descuentoTarjeta: boolean = false;
  descuentoBoletos: boolean = false;

  procesar() {  
    this.boletosPosibles = this.compradores * 7;
    if (this.boletos <= this.boletosPosibles) {
      this.totalPagar();
    } else 
    if (this.boletos > this.boletosPosibles) {
      this.total = 0;
      this.salida = false;
      this.mensajeError = '¡Imposible realizar la compra! Reduce la cantidad de boletos';
    }
  }

  totalPagar() {
    this.mensajeError = '';
    this.mensajeDescuento = '';
    if (this.boletos < 3) {
      this.descuentoBoletos = false;
      if (this.tarjeta == 'no') {
        this.total = this.boletos * this.precio;
      } else 
      if (this.tarjeta == 'si') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1);
      }
    } else
    if (this.boletos > 2 && this.boletos < 6) {
      this.descuentoBoletos = true;
      this.mensajeDescuento = '¡10 % de descuento!'
      if (this.tarjeta == 'no') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1);
      } else 
      if (this.tarjeta == 'si') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1) - (((this.boletos * this.precio) - ((this.boletos * this.precio) * 0.1)) * 0.1);
      }
    } else
    if (this.boletos > 5) {
      this.descuentoBoletos = true;
      this.mensajeDescuento = '¡15 % de descuento!'
      if (this.tarjeta == 'no') {
        this.total = (this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15);
      } else 
      if (this.tarjeta == 'si') {
        this.total =(this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15) - (((this.boletos * this.precio) - ((this.boletos * this.precio) * 0.15)) * 0.1);
      }
    }
    this.salida = true;
  }

  actDescuentoTar(){
    this.descuentoTarjeta = true;
  }

  desDescuentoTar(){
    this.descuentoTarjeta = false;
  }

  salir() {
  this.boletosPosibles = 0;
  this.total = 0;
  this.mensajeError = '';
  this.mensajeDescuento = '';
  this.salida = false;
  this.descuentoTarjeta = false;
  this.descuentoBoletos = false;
  }
}
