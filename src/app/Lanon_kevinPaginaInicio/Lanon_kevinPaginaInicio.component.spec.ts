/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_kevinPaginaInicioComponent } from './Lanon_kevinPaginaInicio.component';

describe('Lanon_kevinPaginaInicioComponent', () => {
  let component: Lanon_kevinPaginaInicioComponent;
  let fixture: ComponentFixture<Lanon_kevinPaginaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_kevinPaginaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_kevinPaginaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
