import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouceTimeComponent } from './debouce-time.component';

describe('DebouceTimeComponent', () => {
  let component: DebouceTimeComponent;
  let fixture: ComponentFixture<DebouceTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouceTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
