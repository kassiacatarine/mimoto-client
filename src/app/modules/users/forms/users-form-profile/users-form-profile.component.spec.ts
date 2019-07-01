import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormProfileComponent } from './users-form-profile.component';

describe('UsersFormProfileComponent', () => {
  let component: UsersFormProfileComponent;
  let fixture: ComponentFixture<UsersFormProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFormProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
