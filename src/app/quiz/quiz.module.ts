import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component'
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: QuizComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DialogModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        BrowserModule,
        MatRadioModule,
        FormsModule
    ],
    declarations: [QuizComponent]
})
export class QuizModule { }
