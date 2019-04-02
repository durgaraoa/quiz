import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.scss'],
    providers: [QuizService]
})
export class QuizComponent {

    constructor(private service:QuizService){
        
    }

    ngOnInit(){
        this.service.getQuizQuestionsData().subscribe(resData =>{
            console.log(resData);
        })
    }
 }
