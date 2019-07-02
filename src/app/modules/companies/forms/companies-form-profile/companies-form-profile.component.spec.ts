import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesFormProfileComponent } from './companies-form-profile.component';

describe('CompaniesFormProfileComponent', () => {
  let component: CompaniesFormProfileComponent;
  let fixture: ComponentFixture<CompaniesFormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesFormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesFormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
