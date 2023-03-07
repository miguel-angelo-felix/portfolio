import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExtratoListComponent } from './component-extrato-list.component';

describe('ComponentExtratoListComponent', () => {
  let component: ComponentExtratoListComponent;
  let fixture: ComponentFixture<ComponentExtratoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExtratoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentExtratoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
