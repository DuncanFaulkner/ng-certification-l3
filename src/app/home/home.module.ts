import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home.component';

/** routes */
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule],
})
export class HomeModule {}
