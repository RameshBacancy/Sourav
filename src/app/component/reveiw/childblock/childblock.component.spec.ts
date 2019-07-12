import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildblockComponent } from './childblock.component';

describe('ChildblockComponent', () => {
  let component: ChildblockComponent;
  let fixture: ComponentFixture<ChildblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
