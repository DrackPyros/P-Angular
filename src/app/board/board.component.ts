import { Component } from '@angular/core';
declare var $: any;


export interface caja{
    url: string,
}

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent{

    public frame: caja;

    constructor() {
        this.frame= { url:"" }
    }

    onSubmit(i: number){
        console.log(this.frame.url);
        // console.log($(this).attr('id'));
        
        // var a = document.getElementById(x)
        // alert(event.target.id);
        // console.log(this);
        if(!this.frame.url){
            alert("Introduce una enlace de tipo <iframe>");
        }
        else
            this.validate(this.frame.url, i);
    }
    
    validate(f: string, i: number){
        var frase = f;
        console.log();
        frase = frase.replace(/\"/g, "'");  
        this.crearframe(frase, i);
    }

    crearframe(frase: string, i: number){
        
        switch(i){
    
            case 2: // Twitter
            var frase2 = frase.split(" ");
            var a = "-1"; // Busca posición

            for (let i in frase2){
                if (frase2[i].includes("blockquote")){
                    a = i;
                }
            }
            if (a == "-1"){
                if (frase2[0].includes("a")){
                    a = "1";
                }
                else
                    alert("Twitter frame no valido");
                    break;
            }
            var f = document.createElement("blockquote");
            f.className = "twitter-tweet";

            case 4: // Twitch
                break;
            
            default:
                var frase2 = frase.split(" ");
                var a = "-1"; // Busca posición

                for (let i in frase2){
                    if (frase2[i].includes("src")){
                        a = i;
                    }
                }
                var url = frase2[a];
                url = url.slice(5, -1);
                // console.log(url);
                // console.log(typeof(url));

                for (let i in frase2){
                    if (frase2[i].includes("width")){
                        a = i;
                    }
                }
                var wi = frase2[a];
                wi = wi.slice(7, -1);
                wi = wi + "px";
                // console.log(wi);
                // console.log(typeof(wi));

                for (let i in frase2){
                    if (frase2[i].includes("height")){
                        a = i;
                    }
                }
                var he = frase2[a];
                he = he.slice(8, -1);
                he = he + "px";
                // console.log(he);
                // console.log(typeof(he));

                // Creación
                
                var frame = document.createElement("iframe");
                frame.style.width = wi;
                frame.style.height = he;
                frame.setAttribute("src", url);
                // console.log(frame);

                if (i == 3){ // Youtube video
                    frame.setAttribute('allowFullScreen', '');
                    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                }
            var back = document.getElementsByClassName("content"); // Coger id para crear iframe en la caja

            document.body.appendChild(frame);
        }

        
    }
}
