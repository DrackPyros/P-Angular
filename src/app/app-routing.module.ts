import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { InfoComponent } from './info/info.component';
import { ErrorComponent } from './error/error.component';
import { PaletteComponent } from './palette/palette.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'home', component: BoardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'info', component: InfoComponent },
    { path: 'palette', component: PaletteComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
