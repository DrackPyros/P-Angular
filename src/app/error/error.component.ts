import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let b = document.getElementsByTagName("app-error");
    // b[0].className = "col-11";
  }
  ngAfterViewInit(): void {
    if(document.body.clientWidth > 1700){
        let b = document.getElementsByTagName("app-error");
        b[0].className = "col-11";
    }
}
}
