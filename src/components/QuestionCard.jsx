import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: fit-content;
    max-width: 50%;
    min-width: 40%;
    margin: 20px auto;
    background-color: lightgreen;
    text-align: center;
    border-radius: 20px;
    padding: 20px;

    @media (max-width: 1200px) {
        max-width: 80%;
        min-width: 70%;
    }
`;
const QuesText = styled.h3`
    font-size: 30px;
    margin-top: 0;

    @media (max-width: 700px) {
        font-size: 27px;
    }
`;
const OptionsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 0;
`;
const Option = styled.li`
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px;
    margin: 10px auto;
    border-radius: 10px;
    width: 50%;
    border: 3px black solid;
    transition: all 0.9 ease;

    &:hover {
        background-color: palegreen;
    }

    @media (max-width: 700px) {
        width: 90%;
        font-size: 22px;
    }
`;

const QuestionCard = ({
    question,
    score,
    setScore,
    currQues,
    setCurrQues,
    quesLength,
    setCards,
    setOutro,
    pause,
    seconds,
    minutes,
}) => {
    //Handler Functions
    const answerHandler = (option) => {
        setCurrQues(++currQues);
        if (option.isCorrect) setScore(++score);
        if (currQues === quesLength) {
            let user = prompt("Please enter your name:");
            //UI change
            setCards(false);
            setOutro(true);
            //Time stop
            pause();
            let time = `${minutes}:${seconds}`;
            //Store scores
            var records = JSON.parse(window.sessionStorage.getItem("records"));
            if (records == null) {
                records = [{ user, score, time, active: true }];
            } else {
                records[records.length - 1].active = false;
                records.push({ user, score, time, active: true });
            }
            window.sessionStorage.setItem("records", JSON.stringify(records));
        }
    };

    return (
        <Container>
            <QuesText>{question.text}</QuesText>
            <OptionsList>
                {question.options.map((option) => {
                    return (
                        <Option
                            onClick={() => answerHandler(option)}
                            key={option.id}
                        >
                            {option.text}
                        </Option>
                    );
                })}
            </OptionsList>
        </Container>
    );
};

export default QuestionCard;
