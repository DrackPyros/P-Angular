import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { InfoComponent } from './info/info.component';
import { ErrorComponent } from './error/error.component';

import { CajaComponent } from './caja/caja.component';
import { CajaFrameComponent } from './caja-frame/caja-frame.component';
import { CajaTwitchComponent } from './caja-twitch/caja-twitch.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EventEmitterService } from './event-emitter.service';

import { SafeHtmlPipeService } from './safe-html-pipe.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoardComponent,
    InfoComponent,
    ErrorComponent,
    CajaComponent,
    CajaFrameComponent,
    CajaTwitchComponent,
    SafeHtmlPipeService,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
      EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
