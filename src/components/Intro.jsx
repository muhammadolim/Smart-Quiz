import React from "react";
import styled from "styled-components";
import { shuffleQuestions } from "../util";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: lightgreen;
    margin-top: 100px;
`;
const Text = styled.h2`
    font-size: 30px;
    margin-right: 5px;
    margin-right: 5px;
`;
const StartButton = styled.button`
    background-color: lightgreen;
    color: black;
    border: none;
    padding: 10px 40px;
    font-size: 50px;
    cursor: pointer;
    border-radius: 7px;
    &:hover {
        background-color: palegreen;
    }
`;

const Intro = ({ quesLength, setIntro, setCards, setRandQuestions, start }) => {
    const startHandler = () => {
        setIntro(false);
        setCards(true);
        setRandQuestions(shuffleQuestions());
        start();
    };

    return (
        <Container>
            <Text>You will be given {quesLength} questions</Text>
            <StartButton onClick={startHandler}>Start</StartButton>
        </Container>
    );
};

export default Intro;
