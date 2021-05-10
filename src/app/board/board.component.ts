import { Component } from '@angular/core';
import { $ } from 'protractor';

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

    // $(document).ready(function(){
    //   $()
    // })

    // var id = $("#test").attr("id");
    // console.log(id);
    
    // var a = document.getElementById(id)
    // alert(event.target.id);
  }
}
