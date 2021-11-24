import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico4Component } from './grafico4.component';

describe('Grafico4Component', () => {
  let component: Grafico4Component;
  let fixture: ComponentFixture<Grafico4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafico4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafico4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
