import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvatarComponent } from './list-avatar.component';

describe('ListAvatarComponent', () => {
  let component: ListAvatarComponent;
  let fixture: ComponentFixture<ListAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
