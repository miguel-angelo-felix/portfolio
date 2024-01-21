import { 
  Component, 
  ContentChildren, 
  Input, 
  OnChanges, 
  OnInit, 
  QueryList,
  TemplateRef 
} from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit, OnChanges {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Array<any> = [];
  @Input() columnsTemplate: Array<TemplateRef<any>> = [];;
  
  columnsProperties: Array<string> = [];

  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(): void {
   if (this.dataSource.length > 0) {
    const firstElement = this.dataSource[0];
    this.columnsProperties = Object.getOwnPropertyNames(firstElement);
    
   }
  }

  
}
