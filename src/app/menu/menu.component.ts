import { NgClass } from '@angular/common';
import { Component, } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  public a: number;

  constructor() {
    this.a = 0;
   }

  Creacaja(){
    // Lienzo
    var back = document.getElementById("background");
    
    // Crear caja
    var box = document.createElement('div');
    var b = document.createElement("button");

    // Propiedades caja
    box.className = "draggable";
    box.id = this.a.toString();

    // Propiedades del boton
    b.innerText = "Crealo";
    b.addEventListener("click", () => {
      alert($(this).attr('id'));
    });

    // Appends
    box.appendChild(b);
    back.appendChild(box);

    this.a += 1;
  }

}
