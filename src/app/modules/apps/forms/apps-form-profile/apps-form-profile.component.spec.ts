import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsFormProfileComponent } from './apps-form-profile.component';

describe('AppsFormProfileComponent', () => {
  let component: AppsFormProfileComponent;
  let fixture: ComponentFixture<AppsFormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsFormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsFormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
