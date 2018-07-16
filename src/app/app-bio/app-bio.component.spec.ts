import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBioComponent } from './app-bio.component';

describe('AppBioComponent', () => {
  let component: AppBioComponent;
  let fixture: ComponentFixture<AppBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
