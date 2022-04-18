import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCityDetailsComponent } from './view-city-details.component';

describe('ViewCityDetailsComponent', () => {
  let component: ViewCityDetailsComponent;
  let fixture: ComponentFixture<ViewCityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
