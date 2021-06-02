import { Component, OnInit, Input } from '@angular/core';
import { iframely } from "@iframely/embed.js";
declare var $: any;

@Component({
    selector: 'app-caja',
    templateUrl: './caja.component.html',
    styleUrls: ['./caja.component.scss']
})

export class CajaComponent implements OnInit {

    @Input () idRecibida: number = 0; //Id de la propia caja
    @Input () cargar: boolean; //Si necesita ser cargado
    @Input () Aid: number = 0; //Array id

    public url: string;
    abierto = true;

    constructor() {
        this.url= "";
    }

    ngOnInit(): void {
        this.prop();
        iframely.load();

    }

    ngAfterViewInit(): void {
        if(this.cargar){
            let f = localStorage.getItem("url");
            let frase = f.split(",");

            if(frase[this.Aid]){
                this.loadframe(this.Aid);
            }
        }
    }

    cerrar(){
        this.abierto = false;
    }
    
    onSubmit(){
        if(!this.url){
            alert("Introduce una enlace valido, si tienes dudas accede al enlace de información");
        }
        else
            this.validate(this.url);
    }

    validate(f: string){
        var frase = f;
        frase = frase.replace(/\"/g, "'");  
        this.crearframe(frase);
    }

    loadframe(aid: number){
        
        let f = localStorage.getItem("url");
        let frase = f.split(",");
        
        let xa = localStorage.getItem("x");
        let x = xa.split(",");
        
        let ya = localStorage.getItem("y");
        let y = ya.split(",");
        
        let wa = localStorage.getItem("wi");
        let width = wa.split(",");
        
        let ha = localStorage.getItem("he");
        let height = ha.split(",");
        
        var box = document.getElementById(this.idRecibida.toString());
        box.style.width = width[aid]+"px";
        box.style.height = height[aid]+"px";
        box.style.left = x[aid]+"px";
        box.style.top = y[aid]+"px";

        var frame = document.createElement("div");
        frame.className = "iframely-embed";
        frame.style.width = "300px";
        var c = document.createElement("div");
        c.className = "iframely-responsive";

        var link = document.createElement("a");
        link.setAttribute("data-iframely-url", "");
        link.setAttribute("href", frase[aid]);

        let d = document.createElement("p");
        d.classList.add("hidden");
        d.style.display = "none";
        d.innerHTML = frase[aid];

        // Imports
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);

        c.appendChild(link);
        frame.appendChild(c);

        box.appendChild(d);
        box.appendChild(frame);
        iframely.load();
    }

    crearframe(frase: string){
        var box = document.getElementById(this.idRecibida.toString());
        
        var frame = document.createElement("div");
        frame.className = "iframely-embed";
        frame.style.width = "300px";
        var c = document.createElement("div");
        c.className = "iframely-responsive";

        var link = document.createElement("a");
        link.setAttribute("data-iframely-url", "");
        link.setAttribute("href", frase);

        var url = document.createElement("p");
        url.classList.add("hidden");
        url.style.display = "none";
        url.innerHTML = frase;

        // Imports
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);

        c.appendChild(link);
        frame.appendChild(c);

        box.appendChild(url);
        box.appendChild(frame);
        iframely.load();
        // this.prop();
    }

    prop(): void { // Añadir propiedades jquery a las cajas
        $( function inicio() {
            $( ".draggable" )
                .draggable(
                    {containment: "#background"}, // especifica respecto a qué es dragable
                        {start: function(e: any, ui: any) {}},
                    )
        
                .resizable(
                    {containment: "#background"}, // especifica respecto a qué es resizable
                        {start: function(e: any, ui: any) {}} 
                    );
                } 
        );
    }

}
