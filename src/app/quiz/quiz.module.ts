import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component'
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
    { path: '', component: QuizComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DialogModule,
        BrowserAnimationsModule
    ],
    declarations: [QuizComponent]
})
export class QuizModule { }
