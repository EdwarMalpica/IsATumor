import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashAnimationComponent } from './splash-animation/splash-animation.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ArticleComponent } from './article/article.component';
import { AnaliceImageComponent } from './analice-image/analice-image.component';
import { FileUploadModule } from 'primeng/fileupload';
import { LoaderButtonComponent } from './loader-button/loader-button.component';
// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [AppComponent, HeaderComponent, SplashAnimationComponent, UploadImageComponent, ArticleComponent, AnaliceImageComponent, LoaderButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    FileUploadModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
