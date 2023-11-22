import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliceImageComponent } from './analice-image.component';

describe('AnaliceImageComponent', () => {
  let component: AnaliceImageComponent;
  let fixture: ComponentFixture<AnaliceImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliceImageComponent]
    });
    fixture = TestBed.createComponent(AnaliceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
