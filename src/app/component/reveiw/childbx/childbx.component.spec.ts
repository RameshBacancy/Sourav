import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbxComponent } from './childbx.component';

describe('ChildbxComponent', () => {
  let component: ChildbxComponent;
  let fixture: ComponentFixture<ChildbxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildbxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
