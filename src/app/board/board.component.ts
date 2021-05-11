import { Component } from '@angular/core';
declare var $: any;


export interface caja{
  url: string,
  width: string,
  height: string
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent{

  public frame: caja;

  constructor() {
    this.frame= { url:"", width:"", height:"" }
   }

  onSubmit(){
    console.log(this.frame.url);
    // console.log($(this).attr('id'));
    
    // var a = document.getElementById(x)
    // alert(event.target.id);
    
    if(!this.frame.url){
      alert("Introduce una enlace de tipo <iframe>");
    }
    else
      this.validate(this.frame.url);
  }

  // ---------------------------------------------
  // f = "<iframe width='560' height='315' src='https://www.youtube.com/embed/JdeJ-ct6S4E' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  // console.log("a = "+frase);
  // crearframe(f);
  
  validate(f: string){
    // var frase = document.forms["pipo"]["pep"].value;
    var frase = f;
    console.log();

    frase = frase.replace(/\"/g, "'");
    // console.log("b = "+frase);
    // console.log(typeof(frase2));    
    this.crearframe(frase);
  }

  crearframe(frase: string){

    // if(f == frase2){
    //     console.log("iguales");
    // }
    
    var frase2 = frase.split(" ");
    var a = "-1";

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
    wi = wi+"px";
    // console.log(wi);
    // console.log(typeof(wi));

    for (let i in frase2){
      if (frase2[i].includes("height")){
          a = i;
      }
    }
    var he = frase2[a];
    he = he.slice(8, -1);
    he = he+"px";
    // console.log(he);
    // console.log(typeof(he));

    // ----------------------------------------------
    var frame = document.createElement("iframe");
    frame.style.width = wi;
    frame.style.height = he;
    // frame.style.border = 0;
    frame.setAttribute("src", url);

    console.log(frame);

    document.body.appendChild(frame);

    // Youtube
    // frame.setAttribute('allowFullScreen', '')
  }
}
