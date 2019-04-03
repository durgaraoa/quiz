import { Component, Input } from '@angular/core';
import { AnsweredQuestion } from '../../shared/models/answerd.model';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['preview.component.scss']
})
export class QuizPreviewComponent {

    @Input() listOfAnswers: AnsweredQuestion[];
    @Input() isReport: boolean;

}
