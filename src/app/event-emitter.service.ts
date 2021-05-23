import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EventEmitterService {
    f = new EventEmitter();
    subsVar: Subscription

    constructor() { }

    OnButtonClick(i){
        this.f.emit(i);
    }
}
