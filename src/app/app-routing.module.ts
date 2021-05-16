import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component'
import { InfoComponent } from './info/info.component'
import { ErrorComponent } from './error/error.component'

const routes: Routes = [
//     { path: 'home', component: BoardComponent },
//     { path: '',   redirectTo: '/home', pathMatch: 'full' },
//     { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
