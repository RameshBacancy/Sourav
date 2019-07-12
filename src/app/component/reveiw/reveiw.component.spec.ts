import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveiwComponent } from './reveiw.component';

describe('ReveiwComponent', () => {
  let component: ReveiwComponent;
  let fixture: ComponentFixture<ReveiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReveiwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
