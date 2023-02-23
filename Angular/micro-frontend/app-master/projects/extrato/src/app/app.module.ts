import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('micro-app-extrato', elem);
  }

  ngDoBootstrap(){}

}
