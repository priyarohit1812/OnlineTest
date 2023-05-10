export interface User {
    userId: number,
    firstName: string,
    lastName?: string,
    email: string,
    mobile: string,
    password: string
}

export interface Response {
    error: boolean,
    message: string,
    response: any;
}

export interface Quiz {
    id: number,
    code: string,
    name: string,
    totalScore: number,
    passingScore: number,
    questions: Question[]
}

export interface Question {
    id: number,
    code: string,
    text: string,
    score: number
    options: Option[],
    answer: string
}

export interface Option {
    code: string,
    text: string
}

export enum OptionCodes {
    OptionA = "Option-A",
    OptionB = "Option-B",
    OptionC = "Option-C",
    OptionD = "Option-D",
}

export interface Result{
    resultId: number,
    quizId: number,
    marksObtained: number,
    maxMarks: number,
    isPass: boolean
}

export interface ResultDetails{
    resultId: number,
    quiz: Quiz,
    marksObtained: number,
    maxMarks: number,
    isPass: boolean
}