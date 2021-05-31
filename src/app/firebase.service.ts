import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from "@angular/fire/database";
import { EventEmitterService } from './event-emitter.service';
import * as CryptoJS from 'crypto-js';

// declare let CryptoJS: any;

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    private a: Observable<any>;
    public log: boolean; 


    constructor( private db: AngularFireDatabase, 
        private eventEmitterService: EventEmitterService ) { 

            this.a = db.list("Usuarios").snapshotChanges();
            let usr = localStorage.getItem('usr');
            if(usr != null){
                this.log = true;
            }
            else
                this.log = false;
    }

    public leerDB (){
        return this.a;
    }

    login (usr: string, pwd: string){
        let salir = true;
        this.leerDB().subscribe((data: any) =>{
            for( let c in data ){

                if (data[c].key == usr){
                    pwd = CryptoJS.MD5(pwd).toString();

                    if(data[c].payload.val().pwd === pwd){            
                        localStorage.setItem("usr", usr);
                        this.log = true;
                        salir = false;
                   }
                }
            }
            if(salir == true){
                alert("usuario o contraseña incorrectos");
            }
            else
                location.reload();
        })
    }

    crearUser(usr: string, pwd: string){
        var salir = true;

        this.leerDB().subscribe((data: any) =>{
            for( let c in data ){

                if (data[c].key == usr){
                    salir = false;
                }
            }
    
            if(salir == true){
                pwd = CryptoJS.MD5(pwd).toString();
                this.db.list("Usuarios").set(usr, {"pwd": pwd});
                localStorage.setItem("usr", usr);
                location.reload();
            }
            else
                alert("Usuario existente");
        })
    }

    getCajas(){
        var wi = [];
        var he = [];
        
        var x = [];
        var y = [];
        
        var url = [];
        var tipo = [];

        let key = localStorage.getItem("usr");
        let m = this.db.list("Usuarios/"+key+"/cajas").snapshotChanges();
        m.subscribe((data: any) =>{

            let i = 0;

            for( let c in data ){
                he[i] = (data[c].payload.val().heigth);
                wi[i] = (data[c].payload.val().width);

                x[i] = (data[c].payload.val().x);
                y[i] = (data[c].payload.val().y);

                url[i] = (data[c].payload.val().url);
                tipo[i] = (data[c].payload.val().tipo);      
                i++;          
            }
            localStorage.setItem("wi", wi.toString());
            localStorage.setItem("he", he.toString());
            localStorage.setItem("x", x.toString());
            localStorage.setItem("y", y.toString());
            localStorage.setItem("tipo", tipo.toString());
            localStorage.setItem("url", url.toString());
            this.eventEmitterService.setsus();
        })
    }

    setCajas(){
        let key = localStorage.getItem("usr");
        // console.log(key);
        if(key != null){
            this.db.list("Usuarios/"+key).remove("cajas");
            let f = localStorage.getItem("url");
            let frase = f.split(",");
            
            let xa = localStorage.getItem("x");
            let x = xa.split(",");
            
            let ya = localStorage.getItem("y");
            let y = ya.split(",");
            
            let wa = localStorage.getItem("wi");
            let width = wa.split(",");
            
            let ha = localStorage.getItem("he");
            let height = ha.split(",");

            let t = localStorage.getItem("tipo");
            let tipo = t.split(",");

            for( let i = 0; i<tipo.length; i++){
                this.db.list("Usuarios/"+key+"/cajas").set(i.toString(), {
                    "heigth": height[i], 
                    "url": frase[i], 
                    "width": width[i], 
                    "x": x[i], 
                    "y": y[i], 
                    "tipo": tipo[i]
                    
                });
            }


        }
    }
}
