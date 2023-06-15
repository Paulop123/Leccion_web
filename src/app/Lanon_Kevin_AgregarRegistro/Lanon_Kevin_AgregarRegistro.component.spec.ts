/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_Kevin_AgregarRegistroComponent } from './Lanon_Kevin_AgregarRegistro.component';

describe('Lanon_Kevin_AgregarRegistroComponent', () => {
  let component: Lanon_Kevin_AgregarRegistroComponent;
  let fixture: ComponentFixture<Lanon_Kevin_AgregarRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_Kevin_AgregarRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_Kevin_AgregarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
