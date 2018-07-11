import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarouselUpdatedComponent } from './app-carousel-updated.component';

describe('AppCarouselUpdatedComponent', () => {
  let component: AppCarouselUpdatedComponent;
  let fixture: ComponentFixture<AppCarouselUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCarouselUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarouselUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
