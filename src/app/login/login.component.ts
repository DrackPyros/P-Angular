import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from "../firebase.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public a: Observable<any>;
    public n: string;   //usr
    public p: string;   //pwd
    public c = true; //Cambiar

    constructor( private db:FirebaseService ) { }

    ngOnInit(): void {
        // this.db.setCajas();
    }

    ngAfterViewInit(): void {
        if(document.body.clientWidth > 1700){
            let b = document.getElementsByTagName("app-login");
            b[0].className = "col-11";
        }
    }

    cambiar(){ //Cambia entre Crear usuario y Login
        if(this.c == true){
            this.c = false;
        }
        else
            this.c = true
    }

    onSubmit(i: number){
        if(i == 1){
            if(!localStorage.getItem("usr")){
                if(!this.n && !this.p){
                    alert("Introduce credenciales de Usuario");
                }
                else
                    this.db.login(this.n, this.p)
            }
            else
                alert("cierra sesión primero");
        }
        else{
            if(!this.n && !this.p){
                alert("Introduce credenciales de Usuario");
            }
            else
                this.db.crearUser(this.n, this.p)
        }
    }   
}
