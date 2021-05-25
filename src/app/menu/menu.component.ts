import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
declare var $: any;


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

    public condition = true;


    constructor(private eventEmitterService: EventEmitterService) {
    }

    ngOnInit(): void{        
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    // Intento de cargar cajas al inicio
    // ngAfterViewInit(): void {
    //     if (localStorage.getItem("x")){
    //         console.log("funciona");
    //         this.loadCajas();
    //     }
    // }

    clearBoard(){
        var canvas = document.getElementById("background");

        while (canvas.childElementCount != 1) {
            canvas.removeChild(canvas.childNodes[1]);
        }
    }

    saveCajas(){
        if(localStorage.getItem("x")){
            window.localStorage.clear();
        }
        var c = document.getElementsByClassName("draggable");
        var wi = [];
        var he = [];
        
        var x = [];
        var y = [];
        
        var url = [];
        var tipo = [];
        
        for(let el = 0; el < c.length; el++) {
            let i = <HTMLElement><any>c[el];
            
            wi[el]  = i.clientWidth;
            he[el] = i.clientHeight;
            
            x[el] = i.offsetLeft;
            y[el] = i.offsetTop;
            
            var m = c[el].getElementsByClassName("hidden");
            tipo[el] = m[0].innerHTML;
            url[el] = m[1].innerHTML;

        }
        localStorage.setItem("wi", wi.toString());
        localStorage.setItem("he", he.toString());
        localStorage.setItem("x", x.toString());
        localStorage.setItem("y", y.toString());
        localStorage.setItem("tipo", tipo.toString());
        localStorage.setItem("url", url.toString());

    }

    loadCajas(){
        this.clearBoard();

        tipo = localStorage.getItem("tipo");
        var tipo = tipo.split(",");

        for(let i = 0; i< tipo.length; i++){

            if(tipo[i] == "url"){
                this.NewCaja(1, true, i);
            }
            else if(tipo[i] == "frame"){
                this.NewCaja(2, true, i);
            }
            else
                this.NewCaja(3, true, i);
        }
    }

    NewCaja(i: number, cargar: boolean, id: number = null){
        this.eventEmitterService.OnButtonClick({i:i, cargar:cargar, id:id});
    }

    Lightmode(){
        var button = document.getElementsByClassName("btn-light");
        var dark = document.getElementsByClassName("bg-dark");

        while(dark.length){
            dark[0].classList.replace("bg-dark", "bg-light");
        }

        while(button.length){
            button[0].classList.replace("btn-light", "btn-dark");
        }
        
        this.condition = false;

    }
    Darkmode(){
        var button = document.getElementsByClassName("btn-dark");
        var light = document.getElementsByClassName("bg-light");
        
        while(light.length){
            light[0].classList.replace("bg-light", "bg-dark");
        }

        while(button.length){
            button[0].classList.replace("btn-dark", "btn-light");
        }   

        this.condition = true;
    }

}
