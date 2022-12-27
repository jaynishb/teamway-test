import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { Question, questions } from "./data";
import { Answer, getQuestion, getResult, Result } from "./data/questions";
import { QuestionComponent } from "./Question";

export const QuestionDashboard = () => {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [question, setQuestion] = useState<Question>()
    const [answers, setAnswers] = useState<Answer[]>([]);

    const [personalityMessage, setPersonalityMessage] = useState<string>()

    useEffect(() => {
        getQuestion(questionIndex).then(setQuestion)
    }, [questionIndex])

    const onAnswerSelect = (selected: string) => {
        const index = answers.findIndex((answer => answer.questionIndex === questionIndex))
        if (index > -1) {
            answers.splice(index, 1);
        }

        answers.push({
            questionIndex,
            selected
        })
        setAnswers([...answers])
    }

    const currentQuestionSelectedAnswer = useMemo(() => {
        const index = answers.findIndex((answer => answer.questionIndex === questionIndex))
        if (index > -1) {
            return answers[index].selected
        }
        return undefined
    }, [answers])

    const onSubmit = () => {
        setQuestionIndex(questionIndex + 1)
    }

    const showResult = () => {
        const result = getResult(answers);
        console.log(result, 'result')
        if (result === Result.INTROVERT) {
            setPersonalityMessage('You are an Introvert person.');
        }

        if (result === Result.EXTROVERT) {
            setPersonalityMessage('You are an Extrovert person.');
        }
    }

    const isLastQuestion = questions.length === (questionIndex + 1)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Container fluid="md">
                {!personalityMessage && <h4>Please answer this Questions</h4>}
                {personalityMessage && (
                    <h2>
                        {personalityMessage}
                    </h2>
                )}
                {!personalityMessage && (<>
                    <Row>
                        {question && (
                            <QuestionComponent question={question} onClick={onAnswerSelect} selectedOption={currentQuestionSelectedAnswer} />
                        )}
                    </Row>
                    <Row>
                        <Button style={{float: 'right', margin: 10}} variant="primary" onClick={isLastQuestion ? showResult : onSubmit}>Submit</Button>{' '}
                    </Row>
                </>)}
            </Container>

        </div>
    );
}