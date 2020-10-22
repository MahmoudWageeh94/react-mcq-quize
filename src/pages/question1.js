import React from "react";
import { useSelector } from "react-redux";
import Question from "../components/Question"
import { shuffle } from "../hooks/shuffleFunction"
import { Container } from "../components/styled";

const Question1 = () => {
  const questions = useSelector((state) => state.questions.questions);
  const shuffledQuestions = shuffle(questions);
  return (
    <Container>
      <Question question={shuffledQuestions[0]} to="/question2"/>
    </Container>
  );
};

export default Question1;
