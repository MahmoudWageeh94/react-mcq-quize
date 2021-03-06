import React from "react";
import { useSelector } from "react-redux";
import Question from "../components/Question";
import { shuffle } from "../hooks/shuffleFunction";
import { Container } from "../components/styled";

const Question3 = () => {
  const questions = useSelector((state) => state.questions.questions);
  const unAnswerd = questions.filter((question) => question.answerd === false);
  const shuffledQuestions = shuffle(unAnswerd);

  return (
    <Container>
      <Question question={shuffledQuestions[0]} to="/question4" />
    </Container>
  );
};

export default Question3;
