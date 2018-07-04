import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeaturettesComponent } from './app-featurettes.component';

describe('AppFeaturettesComponent', () => {
  let component: AppFeaturettesComponent;
  let fixture: ComponentFixture<AppFeaturettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFeaturettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFeaturettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
