import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTilesComponent } from './app-tiles.component';

describe('AppTilesComponent', () => {
  let component: AppTilesComponent;
  let fixture: ComponentFixture<AppTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
