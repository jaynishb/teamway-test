export const promisify = <T>(result: T): Promise<T> => {
    return new Promise((resolve) => resolve(result))
}

export interface Question {
    question: string,
    options: string[],
    introvertTraits: string[],
    extrovertTraits: string[]
}

export const questions: Question[] = [{
    question: 'Do you like Cat or Dog',
    options: ['Dog', 'Cat'],
    introvertTraits: ['Cat'],
    extrovertTraits: ['Dogs']
}, {
    question: 'Which do you prefer? Please choose one',
    options: ['Cafe', 'Festival', 'Concert', 'Library'],
    introvertTraits: ['Cafe', 'Library'],
    extrovertTraits: ['Festival', 'Concert']
}, {
    question: 'Do you like to speak in public?',
    options: ['Love it', 'Nope!'],
    introvertTraits: ['Nope!'],
    extrovertTraits: ['Love it']
}]