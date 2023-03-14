import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentExtratoListComponent } from './components/component-extrato-list/component-extrato-list.component';
import { ComponentAppMasterComponent } from 'src/app/components/component-app-master/component-app-master.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentExtratoListComponent,
    ComponentAppMasterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'extrato',
        component: ComponentExtratoListComponent
      }
    ])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  //bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-extrato', elem);
  }
}
