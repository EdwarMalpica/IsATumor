import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashAnimationComponent } from './splash-animation.component';

describe('SplashAnimationComponent', () => {
  let component: SplashAnimationComponent;
  let fixture: ComponentFixture<SplashAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashAnimationComponent]
    });
    fixture = TestBed.createComponent(SplashAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
