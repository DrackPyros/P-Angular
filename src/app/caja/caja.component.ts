import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
import { iframely } from "@iframely/embed.js";

@Component({
    selector: 'app-caja',
    templateUrl: './caja.component.html',
    styleUrls: ['./caja.component.scss']
})

export class CajaComponent implements OnInit {

    @Input () idRecibida: number=0;
    public url: string;
    abierto = true;

    constructor() {
        this.url= "";
     }

    ngOnInit(): void {
        this.prop();
        iframely.load();

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

    crearframe(frase: string){
        var box = document.getElementById(this.idRecibida.toString());

        // var menu = document.createElement("div");
        // menu.className = "menu";
        
        var frame = document.createElement("div");
        frame.className = "iframely-embed";
        frame.style.width = "300px";
        var c = document.createElement("div");
        c.className = "iframely-responsive";

        var link = document.createElement("a");
        link.setAttribute("data-iframely-url", "");
        link.setAttribute("href", frase);

        // Imports
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);

        c.appendChild(link);
        frame.appendChild(c);

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
