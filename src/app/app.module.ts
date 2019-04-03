import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from './quiz/quiz.module';
import { QuizPreviewComponent } from './quiz/preview/report.component';
import { QuizReportComponent } from './quiz/report/report.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
