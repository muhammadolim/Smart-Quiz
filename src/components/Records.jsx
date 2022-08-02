import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    width: 40%;
    margin: auto;

    @media (max-width: 1200px) {
        width: 90%;
    }
`;
const ScoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    width: 100%;
    p {
        margin-bottom: 5px;
    }

    @media (max-width: 700px) {
        font-size: 25px;
    }
`;
const QuesInfo = styled.p`
    font-size: 25px;
    margin: 0;

    @media (max-width: 700px) {
        margin-top: 20px;
    }
`;

const Records = ({ score, currQues, quesLength, seconds, minutes }) => {
    return (
        <Container>
            <ScoreInfo>
                <p>Score: {score}</p>
                <p>
                    Time: {minutes}:{seconds}
                </p>
            </ScoreInfo>
            <QuesInfo>
                Question: {currQues + 1} / {quesLength}
            </QuesInfo>
        </Container>
    );
};

export default Records;
