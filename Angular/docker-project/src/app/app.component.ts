import { Component, TemplateRef, ViewChild } from '@angular/core';

import { PeriodicElement } from './interfaces/periodicElement';
import { Category } from './interfaces/category';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('productName') productNameChild!: TemplateRef<any>;
  @ViewChild('productPrice') productPriceChild!: TemplateRef<any>;

  title = 'docker-project';
  viewChildTemplate: Array<TemplateRef<any>> = [];
  
  DISPLAYED_COLUMNS = ['Nome', 'Preço'];
  
  ELEMENT_DATA: Product[] = [
    {productName: 'PC', productPrice: '1000'},
    {productName: 'Celular', productPrice: '500'}
  ];

  ngAfterViewInit(): void {
    this.createViewChildTemplate();
  }

  createViewChildTemplate() {
    this.viewChildTemplate.push(this.productNameChild)
    this.viewChildTemplate.push(this.productPriceChild)
  }
  
}
