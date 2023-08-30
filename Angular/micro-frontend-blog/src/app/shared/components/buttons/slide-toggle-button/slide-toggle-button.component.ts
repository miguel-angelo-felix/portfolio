import { Component, EventEmitter, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-slide-toggle-button',
  templateUrl: './slide-toggle-button.component.html',
  styleUrls: ['./slide-toggle-button.component.scss']
})
export class SlideToggleButtonComponent {
  
  @Output() actionCLick: EventEmitter<any> = new EventEmitter();
  
  showFiller = false;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  ngOnInit(){}

  onClick() {
    this.checked = !this.checked;
    this.actionCLick.emit(this.checked);
  }

}
