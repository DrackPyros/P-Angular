import { NgClass } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  constructor() { }

  Creacaja(){
    var back = document.getElementById("background");
    var box = document.createElement('div');
    box.className = "draggable";
    back.appendChild(box);
  }

}
