import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-splash-animation',
  templateUrl: './splash-animation.component.html',
  styleUrls: ['./splash-animation.component.css'],
})
export class SplashAnimationComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }
  @ViewChild('lottieContainer') lottieContainer!: ElementRef;
  options: AnimationOptions = {
    path: './assets/lottie/brainAnimation.json',
    loop: false,
  };
  onAnimate(animationItem: AnimationItem): void {
    animationItem.stop();
    console.log(animationItem);
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationItem = (
            this.lottieContainer.nativeElement as HTMLElement
          ).querySelector('.ng-lottie');
          if (animationItem) {
            const animationPlayer = (animationItem as any).animation;
            if (animationPlayer) {
              animationPlayer.play(); // Iniciar la animación
            }
          }
          observer.unobserve(this.lottieContainer.nativeElement);
        }
      });
    });

    observer.observe(this.lottieContainer.nativeElement);
  }
}
