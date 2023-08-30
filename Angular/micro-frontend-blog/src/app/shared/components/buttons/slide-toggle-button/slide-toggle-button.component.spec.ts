import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleButtonComponent } from './slide-toggle-button.component';

describe('SlideToggleButtonComponent', () => {
  let component: SlideToggleButtonComponent;
  let fixture: ComponentFixture<SlideToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleButtonComponent]
    });
    fixture = TestBed.createComponent(SlideToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
