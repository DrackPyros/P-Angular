import { Component, OnInit, Input } from '@angular/core';

declare var $: any;
declare let Twitch: any;


@Component({
    selector: 'app-caja-twitch',
    templateUrl: './caja-twitch.component.html',
    styleUrls: ['./caja-twitch.component.scss']
})

export class CajaTwitchComponent implements OnInit {

    @Input () idRecibida: number = 0; //Id de la propia caja
    @Input () cargar: boolean; //Si necesita ser cargado
    @Input () Aid: number = 0; //Array id

    public url: string;
    public tipo: string;

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
            this.validate(this.url, this.tipo);
    }

    validate(f: string, h: String){
        var frase = f;
        frase = frase.replace(/\"/g, "'");  
        this.crearframe(frase, h);
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

        let t = localStorage.getItem("tipo");
        let tipo = t.split(",");
        
        var box = document.getElementById(this.idRecibida.toString());
        box.style.width = width[aid]+"px";
        box.style.height = height[aid]+"px";
        box.style.left = x[aid]+"px";
        box.style.top = y[aid]+"px";

        // Clear
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);

        if (tipo[aid] == "stream"){

            let d = document.createElement("p"); //URL
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase[aid];  

            let p = document.createElement("p"); //Opción
            p.classList.add("hidden"); 
            p.style.display = "none"; 
            p.innerHTML = "stream";
            
            // Crear frame
            let frame = document.createElement("div");
            frame.id = "twitch-embed"
            frame.style.width = "100%";
            frame.style.height = "90%";
            
            // Appends
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);
            
            var options = {
                width: "100%",
                height: "100%",
                channel: frase[aid],
                parent: ["localhost"]
            };
            var player = new Twitch.Player("twitch-embed", options);
            player.setVolume(0.5);
        }
        else if(tipo[aid] == "chat"){

            let d = document.createElement("p");
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase[aid];  

            let p = document.createElement("p");
            p.className = "hidden";
            p.style.display = "none";
            p.innerHTML = "chat";
            
            let frame = document.createElement("iframe");
            frame.src = "https://www.twitch.tv/embed/"+frase[aid]+"/chat?parent=localhost&darkpopout"
            frame.style.width = "100%";
            frame.style.height = "90%";
            
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);
        }
        else{

            let d = document.createElement("p");
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase[aid];  

            let p = document.createElement("p");
            p.className = "hidden";
            p.style.display = "none";
            p.innerHTML = "video";
            
            let frame = document.createElement("iframe");
            let idvideo = frase[aid].slice(29);
            
            frame.style.width = "100%";
            frame.style.height = "90%";
            frame.src = "https://player.twitch.tv/?video="+idvideo+"&parent=localhost&autoplay=false";
            
            
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);

            var options = {
                width: "100%",
                height: "100%",
                channel: frase[aid],
                parent: ["localhost"]
            };
        }
    }

    crearframe(frase: string, opcion: String){
        var box = document.getElementById(this.idRecibida.toString());
        
        // Clear
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);        

        // Tipo
        if (opcion == "Todo"){
            let d = document.createElement("p"); //URL
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase;  

            let p = document.createElement("p"); //Opción
            p.classList.add("hidden");  
            p.style.display = "none";
            p.innerHTML = "stream";
            
            // Crear frame
            let frame = document.createElement("div");
            frame.id = "twitch-embed"
            frame.style.width = "100%";
            frame.style.height = "90%";
            
            // Appends
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);

            // Framework
            var options = {
                width: "100%",
                height: "100%",
                channel: frase,
                parent: ["localhost"]
            };
            var player = new Twitch.Player("twitch-embed", options);
            player.setVolume(0.5);

        }
        else if(opcion == "Chat"){
            let d = document.createElement("p");
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase;  

            let p = document.createElement("p");
            p.className = "hidden";
            p.style.display = "none";
            p.innerHTML = "chat";
            
            let frame = document.createElement("iframe");
            frame.src = "https://www.twitch.tv/embed/"+frase+"/chat?parent=localhost&darkpopout"
            frame.style.width = "100%";
            frame.style.height = "90%";
            
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);
        }
        else {
            let d = document.createElement("p");
            d.classList.add("hidden");
            d.style.display = "none";
            d.innerHTML = frase;  

            let p = document.createElement("p");
            p.className = "hidden";
            p.style.display = "none";
            p.innerHTML = "video";
            
            let frame = document.createElement("iframe");
            let idvideo = frase.slice(29);
            
            frame.style.width = "100%";
            frame.style.height = "90%";
            frame.src = "https://player.twitch.tv/?video="+idvideo+"&parent=localhost&autoplay=false";
            
            
            box.getElementsByClassName("menu")[0].appendChild(p);
            box.getElementsByClassName("menu")[0].appendChild(d);
            box.appendChild(frame);

            var options = {
                width: "100%",
                height: "100%",
                channel: frase,
                parent: ["localhost"]
            };
        }
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
