import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldchildComponent } from './oldchild.component';

describe('OldchildComponent', () => {
  let component: OldchildComponent;
  let fixture: ComponentFixture<OldchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
