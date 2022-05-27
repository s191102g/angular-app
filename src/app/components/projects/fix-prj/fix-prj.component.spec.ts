/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FixPrjComponent } from './fix-prj.component';

describe('FixPrjComponent', () => {
  let component: FixPrjComponent;
  let fixture: ComponentFixture<FixPrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixPrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
