/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_KevinEditarRegistroComponent } from './Lanon_KevinEditarRegistro.component';

describe('Lanon_KevinEditarRegistroComponent', () => {
  let component: Lanon_KevinEditarRegistroComponent;
  let fixture: ComponentFixture<Lanon_KevinEditarRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_KevinEditarRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_KevinEditarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
