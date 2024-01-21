import { NgClass } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {

  @Input() 
  public variant!: 'primary' | 'secondary';

  @Input()
  public size: 'sm' | 'md' | 'lg' = 'md';

}
