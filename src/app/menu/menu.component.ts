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

  Creacaja(i: number){
    // Lienzo
    var back = document.getElementById("background");
    
    if( i == 4){ // If Twitch Stream
      // Crear caja
      var box = document.createElement('div');

      // Propiedades caja
      box.className = "draggable";
      box.id = this.a.toString();

      // Crear form
      var lab1 = document.createElement("label");
      lab1.setAttribute("for", "channel");
      lab1.innerHTML = "Nombre del Streamer";
      
      var channel = document.createElement("input");
      channel.setAttribute("type", "text");
      channel.setAttribute("name", "channel");

      var r1 = document.createElement("input");
      r1.setAttribute("type", "radio");
      r1.setAttribute("name", "chat");
      r1.setAttribute("value", "yes");

      var lab2 = document.createElement("label");
      lab2.setAttribute("for", "r1");
      lab2.innerHTML = "Con chat";
      
      var r2 = document.createElement("input");
      r2.setAttribute("type", "radio");
      r2.setAttribute("name", "chat");
      r2.setAttribute("value", "no");

      var lab3 = document.createElement("label");
      lab3.setAttribute("for", "r2");
      lab3.innerHTML = "Sin chat";

      // Boton
      var b = document.createElement("button");
      b.innerText = "Crealo";

      // b.addEventListener("click", onSubmit(i));

      // b.addEventListener("click", () => {
        // b.onclick = onSubmit(i); // especificar la funcion onSubmit de boardComponent
        // alert($(this).attr('id'));
      // });

      // Appends
      box.appendChild(lab1);
      box.appendChild(document.createElement("br"));
      box.appendChild(channel);
      box.appendChild(document.createElement("br"));
      box.appendChild(b);
      box.appendChild(document.createElement("br"));
      box.appendChild(r1);
      box.appendChild(lab2);
      box.appendChild(document.createElement("br"));
      box.appendChild(r2);
      box.appendChild(lab3);
    }
    else{
      // Crear caja
      var box = document.createElement('div');
      
      // Propiedades caja
      box.className = "draggable";
      box.id = this.a.toString();

      // Titulo
      var t = document.createElement("h2");
      t.innerHTML = "Pega el código del &#60;iframe&#62; aquí";
      
      // Crear Form
      var f = document.createElement("input");
      f.setAttribute("type", "text");
      // f.setAttribute("#caja", "ngModel");
      // f.setAttribute("[(ngModel)]", "frame.url");
      
      // Propiedades del boton
      var b = document.createElement("button");
      b.innerText = "Crealo";
      b.addEventListener("click", () => {
        // b.onclick = onSubmit(i); // especificar la funcion onSubmit de boardComponent
        alert($(this).attr('id'));
      });

      // Appends
      box.appendChild(t);
      box.appendChild(f);
      box.appendChild(document.createElement("br"));
      box.appendChild(b);
    }
    back.appendChild(box);
    this.a += 1;
  }
}
