import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    r: string;

    @ViewChild('background', { read: ViewContainerRef }) background!: ViewContainerRef;


    constructor(
        private resolver: ComponentFactoryResolver, 
        private eventEmitterService: EventEmitterService,
        private _route: ActivatedRoute,
        private _router: Router) {
    }
    
    ngOnInit() {   
        this.r = this._route.snapshot.paramMap.get("si"); //Reload para funcionar cajas despues de routing
        if(this.r != null){
            let z = (window.location.href)
            z = z.slice(0, -5);
            window.location.assign(z);
        }

        if (this.eventEmitterService.subsVar==undefined) {    
          this.eventEmitterService.subsVar = this.eventEmitterService.    
          f.subscribe((i) => {    
            this.crearCaja(i);    
          });    
        }
    } 
    
    ngAfterViewInit(): void { // Media queries del mercadona
        if(document.body.clientWidth > 1700){
            let b = document.getElementsByTagName("app-board");
            b[0].className = "col-11";
        }
    }
    crearCaja (i) {
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