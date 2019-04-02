import { Option } from './option.model';

export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    options: Array<Option>
}
