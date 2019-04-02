import { Question } from './question.model';

export class Quiz {
    id: number;
    name: string;
    description: string;
    questions: Array<Question>;
}