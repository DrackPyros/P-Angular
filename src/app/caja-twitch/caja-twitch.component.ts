import { Component, OnInit, Input } from '@angular/core';

declare var $: any;
declare let Twitch: any;


@Component({
  selector: 'app-caja-twitch',
  templateUrl: './caja-twitch.component.html',
  styleUrls: ['./caja-twitch.component.scss']
})

export class CajaTwitchComponent implements OnInit {

    @Input () idRecibida: number=0;
    public url: string;
    public tipo: string;

    abierto = true;

    constructor() {
        this.url= "";
    }

    ngOnInit(): void {
        this.prop();
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

    validate(f: string, h){
        var frase = f;
        console.log();
        frase = frase.replace(/\"/g, "'");  
        this.crearframe(frase, h);
    }

    crearframe(frase: string, opcion){
        var box = document.getElementById(this.idRecibida.toString());
        
        // Clear
        let j = box.getElementsByClassName("form");
        box.removeChild(j[0]);

        if (opcion == "Todo"){
            let frame = document.createElement("div");
            frame.id = "twitch-embed"
            frame.style.width = "100%";
            frame.style.height = "90%";
    
            box.appendChild(frame);

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
            let frame = document.createElement("iframe");
            frame.src = "https://www.twitch.tv/embed/"+frase+"/chat?parent=localhost&darkpopout"
            frame.style.width = "100%";
            frame.style.height = "90%";
            box.appendChild(frame);
        }
        else if(opcion == "Video"){
            let frame = document.createElement("iframe");
            let idvideo = frase.slice(29);
            console.log(idvideo);

            frame.style.width = "100%";
            frame.style.height = "90%";
            frame.src = "https://player.twitch.tv/?video="+idvideo+"&parent=localhost&autoplay=false";

    
            box.appendChild(frame);

            var options = {
                width: "100%",
                height: "100%",
                channel: frase,
                parent: ["localhost"]
            };
            var player = new Twitch.Player("twitch-embed", options);
            player.setVolume(0.5);
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
