import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SlideToggleButtonComponent } from './components/buttons/slide-toggle-button/slide-toggle-button.component';
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS = [
  NavBarComponent,
  SlideToggleButtonComponent
]

const MODULES = [
  CommonModule,
  AppRoutingModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES]
 
})
export class SharedModule { }
