import { Component, Input } from '@angular/core';
import { AnsweredQuestion } from '../shared/models/answerd.model';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['preview.component.scss']
})
export class QuizPreviewComponent {


    // listOfAnswers: AnsweredQuestion[] = [];

    @Input("listOfAnswers") listOfAnswers: AnsweredQuestion[];

    constructor() {

    }

    ngOnInit() {
        console.log("Preview")
        console.log(this.listOfAnswers);
    }


}
