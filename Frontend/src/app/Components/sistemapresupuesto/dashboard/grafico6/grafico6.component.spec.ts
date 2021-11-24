import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico6Component } from './grafico6.component';

describe('Grafico6Component', () => {
  let component: Grafico6Component;
  let fixture: ComponentFixture<Grafico6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grafico6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafico6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
