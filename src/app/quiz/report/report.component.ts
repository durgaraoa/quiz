import { Component } from '@angular/core';
import { AnsweredQuestion } from '../../shared/models/answerd.model';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['report.component.scss']
})
export class QuizReportComponent {


    listOfAnswers: AnsweredQuestion[] = [];

    constructor() {

    }

    ngOnInit() {

    }


}
