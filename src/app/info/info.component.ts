import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        if(document.body.clientWidth > 1600){
            let b = document.getElementsByTagName("app-info");
            b[0].className = "col-11";
        }
    }
}
