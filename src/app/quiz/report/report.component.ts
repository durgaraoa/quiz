import { Component, Input } from '@angular/core';
import { AnsweredQuestion } from '../../shared/models/answerd.model';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['report.component.scss']
})
export class QuizReportComponent {

    @Input() listOfAnswers: AnsweredQuestion[];

    correctAnswersCount: number = 0;
    incorrectAnswersCount: number = 0;
    data: any;
    report: boolean = true;
    displayPreview: boolean = false;
    constructor() {

    }

    ngOnInit() {
        this.listOfAnswers.forEach((element: AnsweredQuestion) => {
            if (element.isUserChoiceCorrect) {
                this.correctAnswersCount += 1;
            } else {
                this.incorrectAnswersCount += 1;
            }
        });
        this.data = {
            labels: ['Correct', 'Incorrect'],
            datasets: [
                {
                    data: [this.correctAnswersCount, this.incorrectAnswersCount],
                    backgroundColor: [
                        "green",
                        "red"
                    ],
                    hoverBackgroundColor: [
                        "green",
                        "red"
                    ]
                }]
        };
    }

}
