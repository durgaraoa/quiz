import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from '../shared/models/quiz.model';
import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.scss'],
    providers: [QuizService]
})
export class QuizComponent {

    displayPreview: boolean = false;
    quizObj: Quiz;

    length = 100;
    pageSize = 1;
    pageEvent: PageEvent;
    currentPage = 0;
    question: any;

    constructor(private service: QuizService) {

    }

    ngOnInit() {
        this.service.getQuizQuestionsData().subscribe((resData: Quiz) => {
            this.quizObj = resData;
            this.length = resData.questions.length;
            this.getQuestionsByPage();
        })
    }

    showPreviewDialog() {
        this.displayPreview = true;
    }

    public handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.getQuestionsByPage();
    }

    private getQuestionsByPage() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.quizObj.questions.slice(start, end);
        this.question = part;
    }
}
