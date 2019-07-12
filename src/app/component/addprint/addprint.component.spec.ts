import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprintComponent } from './addprint.component';

describe('AddprintComponent', () => {
  let component: AddprintComponent;
  let fixture: ComponentFixture<AddprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
