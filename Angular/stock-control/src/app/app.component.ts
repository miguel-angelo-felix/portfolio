import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { enviroment } from './environments/enviroments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stock-control' + enviroment.TITLE;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar'
    })
  }

}
