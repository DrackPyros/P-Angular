import { Component, OnChanges, OnInit} from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

    public a: number;

    public condition = true;

    constructor() {
        this.a = 0;
    }

    ngOnInit(): void{
        if (localStorage.getItem("x")){
            this.loadCajas();
        }
        else
            this.Creacaja(5);
    }

    saveCajas(){
        var c = document.getElementsByClassName("draggable");
        var wi = [];
        var he = [];

        var x = [];
        var y = [];
        
        for(let el = 0; el < c.length; el++) {
            wi[el] = c[el].clientWidth;
            // x[el] = c[el].offsetLeft;
            he[el] = c[el].clientHeight;
            // y[el] = c[el].offsetTop;
        }
        localStorage.setItem("x", wi.toString());
        localStorage.setItem("y", he.toString());

        console.log(localStorage.getItem("x"));
        console.log(localStorage.getItem("y"));
    }

    loadCajas(){
        var back = document.getElementById("background");
        x = localStorage.getItem("x");
        var x = x.split(",");
        y = localStorage.getItem("y");
        var y = y.split(",");

        for(let i = 0; i< x.length; i++){
            // console.log(i);
            let box = document.createElement("div");
            box.style.width = x[i]+"px";
            box.style.height = y[i]+"px";

            box.classList.add("draggable");
            // console.log(box);
            back.appendChild(box);
        }
        this.prop();
    }

    prop(): void { // Añadir propiedades a las cajas
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
    Creacaja(i: number){
        // Lienzo
        var back = document.getElementById("background");
        
        if( i == 4 ){ // If Twitch Stream
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
            b.className = "btn btn-primary";
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
            box.classList.add("draggable");
            box.id = this.a.toString();

            // Contenedor general
            var content = document.createElement('div');
            content.className = "content";

            // Titulo
            var t = document.createElement("h2");
            t.innerHTML = "Pega el código del &#60;iframe&#62; aquí";
            
            // Crear Form
            var c = document.createElement('div');
            c.className = "mx-auto";

            var f = document.createElement("input");
            f.setAttribute("type", "text");
            // f.setAttribute("#caja", "ngModel");
            // f.setAttribute("[(ngModel)]", "frame.url");
            
            // Propiedades del boton
            var b = document.createElement("button");
            b.className = "btn btn-primary";
            b.innerText = "Crealo";
            b.addEventListener("click", () => {
                // b.onclick = onSubmit(i); // especificar la funcion onSubmit de boardComponent
                $(document).ready(function() {
                    alert ("Hola Mundo"); 
                });
                // alert($(this).attr('id'));
            });

            // Appends
            content.appendChild(t);
            c.appendChild(f);
            c.appendChild(document.createElement("br"));
            c.appendChild(b);
            content.appendChild(c);
            box.appendChild(content);
        }
        back.appendChild(box);
        this.a += 1;
        this.prop();
    }
    Lightmode(){
        var button = document.getElementsByClassName("btn-light");
        document.body.classList.replace("bg-dark", "bg-light");

        while(button.length){
            button[0].classList.replace("btn-light", "btn-dark");
        }
        
        this.condition = false;

    }
    Darkmode(){
        var button = document.getElementsByClassName("btn-dark");
        document.body.classList.replace("bg-light", "bg-dark");

        while(button.length){
            button[0].classList.replace("btn-dark", "btn-light");
        }   

        this.condition = true;
    }

}
