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
        if (localStorage.getItem("x")){
            this.loadCajas();
        }
        else
            this.NewCaja(1);
            // console.log("a");
            // this.id ++;
        
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }

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
        
        for(let el = 0; el < c.length; el++) {
            wi[el] = c[el].clientWidth;
            he[el] = c[el].clientHeight;

            x[el] = c[el].clientLeft;
            y[el] = c[el].clientTop;
            console.log(x[el]);
            console.log(y[el]);
        }
        localStorage.setItem("wi", wi.toString());
        localStorage.setItem("he", he.toString());
        localStorage.setItem("x", x.toString());
        localStorage.setItem("y", y.toString());

        // console.log(localStorage.getItem("x"));
        // console.log(localStorage.getItem("y"));
    }

    loadCajas(){
        var back = document.getElementById("background");

        x = localStorage.getItem("x");
        var x = x.split(",");

        y = localStorage.getItem("y");
        var y = y.split(",");

        wi = localStorage.getItem("wi");
        var wi = wi.split(",");

        he = localStorage.getItem("he");
        var he = he.split(",");

        for(let i = 0; i< x.length; i++){
            // console.log(i);
            let box = document.createElement("div");
            box.classList.add("draggable");

            box.style.width = wi[i]+"px";
            box.style.height = he[i]+"px";

            // box.style.top = y[i]+"px";
            // box.style.left = x[i]+"px";

            // console.log(box);
            back.appendChild(box);
        }
        // this.prop();
    }

    NewCaja(i){
        this.eventEmitterService.OnButtonClick(i);
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
