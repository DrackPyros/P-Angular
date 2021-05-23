import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-caja-twitch',
  templateUrl: './caja-twitch.component.html',
  styleUrls: ['./caja-twitch.component.scss']
})

export class CajaTwitchComponent implements OnInit {

  @Input () idRecibida: number=0;
  public url: string;


  constructor() {
      this.url= "";
   }

  ngOnInit(): void {
      this.prop();
  }


  onSubmit(){
      console.log(this.url);

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
      // this.crearframe(frase);
  }

  crearframe(frase: string){
 
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
