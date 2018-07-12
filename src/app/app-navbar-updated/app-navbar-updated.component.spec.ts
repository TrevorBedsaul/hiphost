import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarUpdatedComponent } from './app-navbar-updated.component';

describe('AppNavbarUpdatedComponent', () => {
  let component: AppNavbarUpdatedComponent;
  let fixture: ComponentFixture<AppNavbarUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
