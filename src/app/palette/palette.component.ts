import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-palette',
    templateUrl: './palette.component.html',
    styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

    constructor() { }
    color1: string;
    color2: string;
    color3: string;
    color4: string;

    ngOnInit(): void {
        // let b = document.getElementsByTagName("app-palette");
        // b[0].className = "col-11";
    }

    ngAfterViewInit(): void {
        if(document.body.clientWidth > 1600){
            let b = document.getElementsByTagName("app-palette");
            b[0].className = "col-11";
        }
    }
    color(){
        if(this.color1){ //Menu
            let c = document.getElementsByTagName("app-menu") as HTMLCollectionOf<HTMLElement>;
            c[0].classList.remove("bg-light", "bg-dark");
            c[0].style.backgroundColor = this.color1;

        }
        if(this.color2){ //Fondo
            document.body.classList.remove("bg-light", "bg-dark");
            document.body.style.backgroundColor = this.color2;

        }
        if(this.color3){ //Cajas
            let c = document.getElementsByClassName("draggable") as HTMLCollectionOf<HTMLElement>;
            for(let i = 0; i < c.length; i ++){
                c[i].classList.remove("bg-light", "bg-dark");
                c[i].style.backgroundColor = this.color3;
            }
        }
        if(this.color4){ //Botones
            let c = document.getElementsByClassName("btn") as HTMLCollectionOf<HTMLElement>;
            for(let i = 0; i < c.length; i ++){
                c[i].classList.remove("btn-light", "btn-dark");
                c[i].style.backgroundColor = this.color4;
            }
        }
    }
}
