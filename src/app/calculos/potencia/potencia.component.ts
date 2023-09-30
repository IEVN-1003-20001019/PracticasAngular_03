import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  numero: number = 0;
  operacion: string = '';

  calcular(): void{
    while(this.numero < parseInt(this.num2)){
      this.resultado +=  parseInt(this.num1);
      this.operacion += this.num1;
      if (this.numero < parseInt(this.num2) - 1){
        this.operacion += ' + ';
      }
      this.numero++;
    }
  }

  reiniciar(): void{
    this.num1 = '';
    this.num2 = '';
    this.resultado = 0;
    this.numero = 0;
    this.operacion = '';
  }
}