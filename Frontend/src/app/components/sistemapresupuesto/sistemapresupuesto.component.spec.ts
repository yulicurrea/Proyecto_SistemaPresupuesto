import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemapresupuestoComponent } from './sistemapresupuesto.component';

describe('SistemapresupuestoComponent', () => {
  let component: SistemapresupuestoComponent;
  let fixture: ComponentFixture<SistemapresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemapresupuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemapresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
