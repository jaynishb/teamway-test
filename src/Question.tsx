import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Question } from './data';

interface QuestionComponentProps {
    question: Question;
    onClick: (value: string) => void;
    selectedOption?: string
}

export const QuestionComponent = ({question: { question: text, options }, onClick, selectedOption}: QuestionComponentProps) => {
    return (
        <Card style={{ margin: '10px' }}>
            <Card.Body>
                <Card.Title><h3>{text}</h3></Card.Title>

                <ListGroup as="ul">
                    {options.map(option => {
                        return (<ListGroup.Item as="li" key={option} action onClick={() => onClick(option)} active={selectedOption === option}>
                            {option}
                        </ListGroup.Item>)
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}