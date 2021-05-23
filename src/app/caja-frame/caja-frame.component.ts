import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-caja-frame',
  templateUrl: './caja-frame.component.html',
  styleUrls: ['./caja-frame.component.scss']
})
export class CajaFrameComponent implements OnInit {

  @Input () idRecibida: number=0;
  public url: string;


  constructor() {
      this.url= "";
   }

  ngOnInit(): void {
      this.prop();
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
      console.log();
      frase = frase.replace(/\"/g, "'");  
      this.crearframe(frase);
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
        // Creación
        var box = document.getElementById(this.idRecibida.toString());
        
        var frame = document.createElement("iframe");
        frame.style.width = "100%";
        frame.style.height = "90%";
        frame.setAttribute("src", url);
        
        let c = box.getElementsByClassName("form");
        box.removeChild(c[0]);
        box.appendChild(frame);
        console.log("a");

        // Triki truko
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
