import React from "react";
import styled from "styled-components";
import { shuffleQuestions } from "../util";

const leadersLength = 10;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 30px;
`;
const Text = styled.p`
    font-size: 30px;
    margin-top: 0;

    @media (max-width: 600px) {
        font-size: 25px;
        margin-bottom: 20px;
    }
`;
const StartButton = styled.button`
    background-color: lightgreen;
    color: black;
    border: none;
    font-size: 40px;
    padding: 8px 30px;
    cursor: pointer;
    border-radius: 7px;
    margin-bottom: 20px;
    &:hover {
        background-color: palegreen;
    }

    @media (max-width: 600px) {
        font-size: 30px;
        padding: 5px 20px;
    }
`;
const User = styled.p`
    display: flex;
    justify-content: space-between;
    width: 400px;
    font-size: 20px;
    margin: 10px;

    span {
        white-space: nowrap;
        max-width: 75%;
        overflow: hidden;

        @media (max-width: 415px) {
            max-width: 65%;
        }
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;
const TextLead = styled.p`
    margin: 10px;
    color: gold;
    font-size: 30px;
    letter-spacing: 3px;
`;

const activeStyle = { color: "lightgreen" };

const Outro = ({
    score,
    setScore,
    setCurrQues,
    setOutro,
    setCards,
    setRandQuestions,
    seconds,
    minutes,
    reset,
}) => {
    const restartHandler = () => {
        setScore(0);
        setCurrQues(0);
        setOutro(false);
        setCards(true);
        setRandQuestions(shuffleQuestions());
        reset();
    };
    const sortRecords = () => {
        return JSON.parse(window.sessionStorage.getItem("records"))
            .sort(function (x, y) {
                var n = y.score - x.score;
                if (n !== 0) return n;

                let a = x.time.split(":");
                let b = y.time.split(":");

                return +a[0] * 60 + a[1] - (+b[0] * 60 + +b[1]);
            })
            .slice(0, leadersLength);
    };
    let count = 0;

    return (
        <Container>
            <Text>Correct answers: {score}</Text>
            <Text>
                Time: {minutes}:{seconds}
            </Text>
            <StartButton onClick={restartHandler}>Restart</StartButton>

            <TextLead>Leaderboard</TextLead>
            {sortRecords().map((record) => {
                count++;
                return (
                    <User style={record.active ? activeStyle : {}} key={count}>
                        <span>
                            {count}. {record.user}
                        </span>
                        <span>
                            {record.score} &#9866; {record.time}
                        </span>
                    </User>
                );
            })}
        </Container>
    );
};

export default Outro;
