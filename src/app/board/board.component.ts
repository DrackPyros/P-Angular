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
        if (this.eventEmitterService.subsVar==undefined) {    
          this.eventEmitterService.subsVar = this.eventEmitterService.    
          f.subscribe((i) => {    
            this.crearCaja(i);    
          });    
        }    
      } 

    crearCaja (i: number) {
        switch (i){
            case 1:{ // URL Based
                const factory = this.resolver.resolveComponentFactory(CajaComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                this.id ++;
                break;
            }
            case 2:{ // Twitch
                const factory = this.resolver.resolveComponentFactory(CajaFrameComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                this.id ++;
                break;
            }
            case 3: // Iframe Based
                const factory = this.resolver.resolveComponentFactory(CajaTwitchComponent);
                const componentRef = this.background.createComponent(factory);
                componentRef.instance.idRecibida = this.id;
                this.id ++;
        }
    }
}