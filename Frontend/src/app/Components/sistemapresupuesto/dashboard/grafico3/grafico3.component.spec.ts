import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico3Component } from './grafico3.component';

describe('Grafico3Component', () => {
  let component: Grafico3Component;
  let fixture: ComponentFixture<Grafico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafico3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
