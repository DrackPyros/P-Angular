import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-caja-frame',
    templateUrl: './caja-frame.component.html',
    styleUrls: ['./caja-frame.component.scss']
})
export class CajaFrameComponent implements OnInit {

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
            alert("Introduce una enlace de tipo <iframe>");
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

        var frame = document.createElement("iframe");
        frame.style.width = "100%";
        frame.style.height = "90%";
        frame.setAttribute("src", frase[aid]);
        
        let d = document.createElement("p");
        d.classList.add("hidden");
        d.style.display = "none";
        d.innerHTML = frase[aid];

        let c = box.getElementsByClassName("form");
        box.removeChild(c[0]);

        box.getElementsByClassName("menu")[0].appendChild(d);
        box.appendChild(frame);

        let j = box.getElementsByTagName("iframe");
        j[0].setAttribute('allowFullScreen', '');
        j[0].setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        j[0].src = j[0].src;
    }

    crearframe(frase: string){
      
        var frase2 = frase.split(" ");
        let nosalir = false

        for (let i in frase2){
            if (frase2[i].includes("src")){
                var url = frase2[i];
                url = url.slice(5, -1);
                nosalir = true;
            }
        }
        if (nosalir == true){
        // --------------------No se usa------------------
            for (let i in frase2){
                if (frase2[i].includes("width")){
                    var wi = frase2[i];
                    wi = wi.slice(7, -1);
                    wi = wi + "px";
                }
            }

            for (let i in frase2){
                if (frase2[i].includes("height")){
                    var he = frase2[i];
                    he = he.slice(8, -1);
                    he = he + "px";
                }
            }

            if(!wi || !he){
                wi = "400px";
                he = "300px";
            }
        // ----------------------------------------------------

            // Creación
            var box = document.getElementById(this.idRecibida.toString());
            
            var frame = document.createElement("iframe");
            frame.style.width = "100%";
            frame.style.height = "90%";
            frame.setAttribute("src", url);

            let d = document.createElement("p");
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = url;
            
            let c = box.getElementsByClassName("form");
            box.removeChild(c[0]);
            box.appendChild(d);
            box.appendChild(frame);

            // Triki truko (Añadir pantalla completa y otros a iframes que lo necesiten)
            for (let i in frase2){
                if (frase2[i].includes("allowfullscreen>")){
                    let f = box.getElementsByTagName("iframe");
                    f[0].setAttribute('allowFullScreen', '');
                    f[0].setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                    f[0].src = f[0].src;
                }
            }
        }
        else
            alert("Introduce una enlace valido, si tienes dudas accede al enlace de información");
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
