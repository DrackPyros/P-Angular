import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EventEmitterService {
    f = new EventEmitter();
    subsVar: Subscription

    private sus: BehaviorSubject<boolean>; //Var suscripcion loadcajas

    constructor() {
        this.sus = new BehaviorSubject<boolean>(false);
    }

    public getsus(): Observable<boolean>{
        return this.sus;
    }
    public setsus(){
        this.sus.next(true);
    }

    OnButtonClick(i){
        this.f.emit(i);
    }
}
