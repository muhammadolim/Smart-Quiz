import questions from "./data";

export const shuffleQuestions = () => {
    return questions.sort(() => Math.random() - 0.5);
};

export const prependZero = (seconds) => {
    return seconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
    });
};
