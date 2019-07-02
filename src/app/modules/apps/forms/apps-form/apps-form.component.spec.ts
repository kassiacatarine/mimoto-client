import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsFormComponent } from './apps-form.component';

describe('AppsFormComponent', () => {
  let component: AppsFormComponent;
  let fixture: ComponentFixture<AppsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
