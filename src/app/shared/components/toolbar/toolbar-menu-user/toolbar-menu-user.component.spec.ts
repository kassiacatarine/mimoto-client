import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMenuUserComponent } from './toolbar-menu-user.component';

describe('ToolbarMenuUserComponent', () => {
  let component: ToolbarMenuUserComponent;
  let fixture: ComponentFixture<ToolbarMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
