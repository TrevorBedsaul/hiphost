import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSafetyComponent } from './app-safety.component';

describe('AppSafetyComponent', () => {
  let component: AppSafetyComponent;
  let fixture: ComponentFixture<AppSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
