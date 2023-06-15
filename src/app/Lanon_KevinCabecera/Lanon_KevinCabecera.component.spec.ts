/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_KevinCabeceraComponent } from './Lanon_KevinCabecera.component';

describe('Lanon_KevinCabeceraComponent', () => {
  let component: Lanon_KevinCabeceraComponent;
  let fixture: ComponentFixture<Lanon_KevinCabeceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_KevinCabeceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_KevinCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
