/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lanon_kevinFooterComponent } from './Lanon_kevinFooter.component';

describe('Lanon_kevinFooterComponent', () => {
  let component: Lanon_kevinFooterComponent;
  let fixture: ComponentFixture<Lanon_kevinFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lanon_kevinFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lanon_kevinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
