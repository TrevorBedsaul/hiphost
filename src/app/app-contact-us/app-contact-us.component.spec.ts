import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactUsComponent } from './app-contact-us.component';

describe('AppContactUsComponent', () => {
  let component: AppContactUsComponent;
  let fixture: ComponentFixture<AppContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
