import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

import { CajaComponent } from '../caja/caja.component';
import { CajaFrameComponent } from '../caja-frame/caja-frame.component';
import { CajaTwitchComponent } from '../caja-twitch/caja-twitch.component';

declare var $: any;


@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent{

    id: number = 1;

    @ViewChild('background', { read: ViewContainerRef }) background!: ViewContainerRef;


    constructor(private resolver: ComponentFactoryResolver, private eventEmitterService: EventEmitterService) {
    }
    
    ngOnInit() {   
        // Intento de cargar caja cuando se inicia
        // if (!localStorage.getItem("x")){
        //     console.log("f5");  
        //     this.crearCaja(1);
        //     this.id ++;
        // }

        if (this.eventEmitterService.subsVar==undefined) {    
          this.eventEmitterService.subsVar = this.eventEmitterService.    
          f.subscribe((i) => {    
            this.crearCaja(i);    
          });    
        }
        
        let b = document.getElementsByTagName("app-board");
        b[0].className = "col-11";
    } 

    crearCaja (i) {
        console.log(i.id);
        switch (i.i){
            case 1:{ // URL Based
                const factory = this.resolver.resolveComponentFactory(CajaComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                componentRef.instance.cargar = i.cargar;
                componentRef.instance.Aid = i.id;
                this.id ++;
                break;
            }
            case 2:{ // Twitch
                const factory = this.resolver.resolveComponentFactory(CajaFrameComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                componentRef.instance.cargar = i.cargar;
                componentRef.instance.Aid = i.id;
                this.id ++;
                break;
            }
            case 3:{ // Iframe Based
                const factory = this.resolver.resolveComponentFactory(CajaTwitchComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                componentRef.instance.cargar = i.cargar;
                componentRef.instance.Aid = i.id;
                this.id ++;
            }
        }
    }
}