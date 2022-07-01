import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template:`

  <h1>{{titulo}}</h1>

  <button (click)="acumulado(base)">{{base}}</button>

  <span>{{numero}}</span>

  <button (click)="acumulado(-base)">{{base}}</button>
  `
})
export class ContadorComponent{

  titulo:string = 'contador app';
  numero:number=28;
  base:number=5;

  acumulado(valor:number){
    this.numero +=valor;
  }
}
