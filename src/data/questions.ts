import { promisify, Question, questions } from "."

export interface Answer {
    questionIndex: number;
    selected: string
}

export enum Result {
    INTROVERT = 'INTROVERT',
    EXTROVERT = 'EXTROVERT'
}

export const getQuestion = (index: number): Promise<Question> => {
    return promisify<Question>(questions[index])
} 

export const getResult = (answers: Answer[]): Result => {
    let isIntrovert = answers.reduce((result: number, answer: Answer) => {
        let question = questions[answer.questionIndex];

        if (question.introvertTraits.includes(answer.selected)) {
            result += 1;
        }

        return result;
    }, 0);

    return isIntrovert > 0 ? Result.INTROVERT : Result.EXTROVERT
} 