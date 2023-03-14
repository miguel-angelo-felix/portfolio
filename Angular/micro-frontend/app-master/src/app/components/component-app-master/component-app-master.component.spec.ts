import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAppMasterComponent } from './component-app-master.component';

describe('ComponentAppMasterComponent', () => {
  let component: ComponentAppMasterComponent;
  let fixture: ComponentFixture<ComponentAppMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAppMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAppMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
