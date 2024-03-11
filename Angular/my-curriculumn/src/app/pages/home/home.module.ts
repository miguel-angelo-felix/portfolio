import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './view/home.component';
import { HomeRoutingRoutes } from './home-routing.routing';

const COMPONENTS = [
  HomeComponent
];

const MODULES = [];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutes
  ]
})
export class HomeModule { }
