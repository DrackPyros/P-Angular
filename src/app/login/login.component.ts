import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        if(document.body.clientWidth > 1600){
            let b = document.getElementsByTagName("app-login");
            b[0].className = "col-11";
        }
    }
}
