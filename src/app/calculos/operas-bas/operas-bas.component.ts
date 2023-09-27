import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

num1: string = '';
num2: string = '';
resultado: number = 0;
operacion: string = '';
calcular(): void{
if(this.operacion == "1"){
  this.resultado = parseInt(this.num1) + parseInt(this.num2);}
  else if(this.operacion == "2"){
    this.resultado = parseInt(this.num1) - parseInt(this.num2);}
    else if(this.operacion == "3"){
      this.resultado = parseInt(this.num1) * parseInt(this.num2);}
      else if(this.operacion == "4"){
        this.resultado = parseInt(this.num1) / parseInt(this.num2);}
  }
}
