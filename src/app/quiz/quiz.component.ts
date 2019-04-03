import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from '../shared/models/quiz.model';
import { PageEvent } from '@angular/material';
import { AnsweredQuestion } from '../shared/models/answerd.model';
import { Question } from '../shared/models/question.model';
import { Option } from '../shared/models/option.model';

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
    pageEvent: any;
    currentPage = 0;
    question: any;
    selectedQuestion: any;
    listOfAnswers: AnsweredQuestion[] = [];

    constructor(private service: QuizService) {

    }

    ngOnInit() {
        this.service.getQuizQuestionsData().subscribe((resData: Quiz) => {
            this.quizObj = resData;
            this.length = resData.questions.length;
            this.getQuestionsByPage();
            this.preparedAnsweredQuestions(resData.questions)
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

    preparedAnsweredQuestions(questions: Question[]) {
        this.listOfAnswers = [];
        questions.forEach((element: Question) => {
            let answerObj = new AnsweredQuestion();
            console.log(this.getCorrectOptionFromOptions(element.options));
            answerObj.correctAnswer = this.getCorrectOptionFromOptions(element.options).name;
            answerObj.questionId = element.id;
            answerObj.isAnswered = false;
            answerObj.isUserChoiceCorrect = false;
            answerObj.name = element.name;
            answerObj.selectedAnswer = "";
            this.listOfAnswers.push(answerObj);
        });
    }

    getCorrectOptionFromOptions(options: Option[]): any {
        let arrCorrect = options.filter(item => item.isAnswer == true);
        return arrCorrect[0];
    }
}
