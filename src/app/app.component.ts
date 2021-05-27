import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    title = 'p1';
    innerWidth: Number;
    cambio: boolean;
  
    ngOnInit(): void{
        $(document).ready(function () {
            $('.button-span').on('click', function () {
                $('.animated-icon2').toggleClass('open');
            });
        });
    }
    // @HostListener('window.resize', ['$event'])
    responsive(event: any){
        this.innerWidth = event.target.innerWidth;
        let menu = document.getElementsByTagName("app-menu");

        if(document.getElementsByTagName("app-board").length > 0){
            var board = document.getElementsByTagName("app-board");
        }
        else if(document.getElementsByTagName("app-info").length > 0){
            var board = document.getElementsByTagName("app-info");
        }
        else if(document.getElementsByTagName("app-error").length > 0){
            var board = document.getElementsByTagName("app-error");
        }
        else if(document.getElementsByTagName("app-palette").length > 0){
            var board = document.getElementsByTagName("app-palette");
        }
        else if(document.getElementsByTagName("app-login").length > 0){
            var board = document.getElementsByTagName("app-login");
        }

        if(this.innerWidth < 1600){
            menu[0].classList.remove("col-1");
            board[0].classList.remove("col-11");
            this.cambio = true;
        }
        else if(this.cambio == true){
            menu[0].classList.add("col-1");
            board[0].classList.add("col-11");
            this.cambio = false;
        }
    }
}