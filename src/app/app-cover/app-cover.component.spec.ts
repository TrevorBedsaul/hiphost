import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoverComponent } from './app-cover.component';

describe('AppCoverComponent', () => {
  let component: AppCoverComponent;
  let fixture: ComponentFixture<AppCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
