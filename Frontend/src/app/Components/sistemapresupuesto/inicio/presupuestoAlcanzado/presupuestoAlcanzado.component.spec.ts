import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoAlcanzadoComponent } from './presupuestoAlcanzado.component';


describe('PresupuestoAlcanzadoComponent', () => {
  let component: PresupuestoAlcanzadoComponent;
  let fixture: ComponentFixture<PresupuestoAlcanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoAlcanzadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoAlcanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
