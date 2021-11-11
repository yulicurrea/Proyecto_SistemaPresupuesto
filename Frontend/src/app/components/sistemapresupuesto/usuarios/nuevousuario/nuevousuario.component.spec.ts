import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuarioComponent } from './nuevousuario.component';

describe('NuevousuarioComponent', () => {
  let component: NuevoUsuarioComponent;
  let fixture: ComponentFixture<NuevoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
