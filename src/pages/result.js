import React from "react";
import { useSelector } from "react-redux";
import Result from "../components/Result";
import { Container } from "../components/styled";

const ResultBox = () => {
  const score = useSelector(state => state.score.score)
  const user = useSelector(state => state.user.user)
  return (
    <Container>
      <Result user={user} score={score} />
    </Container>
  );
};

export default ResultBox;
