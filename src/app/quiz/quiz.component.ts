import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from '../shared/models/quiz.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.scss'],
    providers: [QuizService]
})
export class QuizComponent {

    displayPreview: boolean = false;
    quizObj:Quiz;

    constructor(private service:QuizService){
        
    }

    ngOnInit(){
        this.service.getQuizQuestionsData().subscribe((resData:Quiz) =>{
            this.quizObj = resData;
            console.log(resData);
        })
    }

    showPreviewDialog(){
        this.displayPreview = true;
    }
 }
