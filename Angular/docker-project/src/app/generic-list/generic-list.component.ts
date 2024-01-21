import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from './iTableColumn';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent<T> implements OnInit { 
  @Input() columns: TableColumn[] = [];
  @Input() items: any[] = [];

  
  constructor() { }

  ngOnInit() {}

}
