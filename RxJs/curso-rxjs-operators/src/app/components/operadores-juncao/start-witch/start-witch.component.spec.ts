import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWitchComponent } from './start-witch.component';

describe('StartWitchComponent', () => {
  let component: StartWitchComponent;
  let fixture: ComponentFixture<StartWitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
