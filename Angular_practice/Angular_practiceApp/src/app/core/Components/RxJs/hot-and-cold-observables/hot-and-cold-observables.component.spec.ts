import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotAndColdObservablesComponent } from './hot-and-cold-observables.component';

describe('HotAndColdObservablesComponent', () => {
  let component: HotAndColdObservablesComponent;
  let fixture: ComponentFixture<HotAndColdObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotAndColdObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotAndColdObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
