import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes:string[]=['spiderman','ironman','hulk','thor','strange'];
  heroeborrado:string='';

  borrarheroe(){
    this.heroeborrado=this.heroes.shift() || '';
  }
}
