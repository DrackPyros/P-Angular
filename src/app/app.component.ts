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
    menu: any;
    board: any;
    cambio: boolean;
  
    ngOnInit(): void{
        $(document).ready(function () {
            $('.button-span').on('click', function () {
                $('.animated-icon2').toggleClass('open');
            });
        });
        
        if(document.body.clientWidth < 1600){
            this.menu = document.getElementsByTagName("app-menu");
            this.board = document.getElementsByTagName("app-board");

            this.menu[0].classList.remove("col-1");
            this.board[0].classList.remove("col-11");
            this.cambio = true;
        }
    }
    // @HostListener('window.resize', ['$event'])
    responsive(event: any){
        this.innerWidth = event.target.innerWidth;
        this.menu = document.getElementsByTagName("app-menu");
        this.board = document.getElementsByTagName("app-board");

        if(this.innerWidth < 1600){
            this.menu[0].classList.remove("col-1");
            this.board[0].classList.remove("col-11");
            this.cambio = true;
        }
        else if(this.cambio == true){
            this.menu[0].classList.add("col-1");
            this.board[0].classList.add("col-11");
            this.cambio = false;
        }
    }
}