import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTSComponent } from './slider-ts.component';

describe('SliderTSComponent', () => {
  let component: SliderTSComponent;
  let fixture: ComponentFixture<SliderTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderTSComponent]
    });
    fixture = TestBed.createComponent(SliderTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
