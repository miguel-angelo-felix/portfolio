import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterVendasComponent } from './manter-vendas.component';

describe('ManterVendasComponent', () => {
  let component: ManterVendasComponent;
  let fixture: ComponentFixture<ManterVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
