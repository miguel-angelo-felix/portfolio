import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterProdutoComponent } from './manter-produto.component';

describe('ManterProdutoComponent', () => {
  let component: ManterProdutoComponent;
  let fixture: ComponentFixture<ManterProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
