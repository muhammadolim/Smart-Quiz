import React, { useState } from "react";
import styled from "styled-components";
import { useStopwatch } from "react-timer-hook";
import { prependZero } from "./util";

import Intro from "./components/Intro";
import Records from "./components/Records";
import QuestionCard from "./components/QuestionCard";
import Outro from "./components/Outro";

import questions from "./data";

const quesLength = 5;

const Background = styled.div`
    width: 100%;
    height: 100vh;
`;
const Title = styled.h1`
    font-size: 35px;
    margin: 0;
    padding: 15px;
    color: black;
    background-color: lightgreen;
    text-align: center;
`;

function App() {
    const [showIntro, setIntro] = useState(true);
    const [showCard, setCards] = useState(false);
    const [showOutro, setOutro] = useState(false);
    const [randQuestions, setRandQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [currQues, setCurrQues] = useState(0);
    const { seconds, minutes, start, pause, reset } = useStopwatch({
        autoStart: false,
    });

    return (
        <Background>
            <Title>Smart Quiz</Title>

            {showIntro ? (
                <Intro
                    quesLength={quesLength}
                    setIntro={setIntro}
                    setCards={setCards}
                    setRandQuestions={setRandQuestions}
                    start={start}
                />
            ) : showCard ? (
                <>
                    <Records
                        score={score}
                        currQues={currQues}
                        quesLength={quesLength}
                        seconds={prependZero(seconds)}
                        minutes={minutes}
                    />
                    <QuestionCard
                        key={questions.indexOf(currQues)}
                        question={randQuestions[currQues]}
                        score={score}
                        setScore={setScore}
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        quesLength={quesLength}
                        setCards={setCards}
                        setOutro={setOutro}
                        pause={pause}
						seconds={prependZero(seconds)}
                        minutes={minutes}
                    />
                </>
            ) : showOutro ? (
                <Outro
                    score={score}
                    setScore={setScore}
                    setCurrQues={setCurrQues}
                    setOutro={setOutro}
                    setCards={setCards}
                    setRandQuestions={setRandQuestions}
                    seconds={prependZero(seconds)}
                    minutes={minutes}
					reset={reset}
                />
            ) : (
                <></>
            )}
        </Background>
    );
}

export default App;
