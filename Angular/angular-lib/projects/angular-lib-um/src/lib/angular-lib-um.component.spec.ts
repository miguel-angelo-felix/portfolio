import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibUmComponent } from './angular-lib-um.component';

describe('AngularLibUmComponent', () => {
  let component: AngularLibUmComponent;
  let fixture: ComponentFixture<AngularLibUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLibUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLibUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
