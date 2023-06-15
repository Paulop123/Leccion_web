/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_KevinRegistrosComponent } from './Lanon_KevinRegistros.component';

describe('Lanon_KevinRegistrosComponent', () => {
  let component: Lanon_KevinRegistrosComponent;
  let fixture: ComponentFixture<Lanon_KevinRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_KevinRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_KevinRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
