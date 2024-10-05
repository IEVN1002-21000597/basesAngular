import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
