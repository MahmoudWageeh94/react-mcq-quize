import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../../store/actions/scoreAction"
import { setAnswerd } from "../../store/actions/questionsAction";
import { shuffle } from "../../hooks/shuffleFunction";
import { Typography,Row, Col, Button } from "antd";

const { Title } = Typography;

const Question =  ({ question, to }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const score = useSelector((state) => state.score.score);
  const shuffledOptions = shuffle(question.answers);
  const handleClick = (answer, correctAns) => {
    if (answer === correctAns) {
      dispatch(setScore(score + 2));
      dispatch(setAnswerd(question.questionId));
      history.push(to);
    }else {
      history.push(to);
      dispatch(setAnswerd(question.questionId));
    }
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>{question.question}</Title>
      </Col>
      <Col span={12} offset={6}>
        {shuffledOptions.map((text, index) => (
          <Button
            style={{ marginRight: "5px" }}
            type="primary"
            key={index}
            onClick={() => handleClick(text, question.correct)}
            className="answerBtn"
          >
            {text}
          </Button>
        ))}
      </Col>
    </Row>
  );
};


export default Question;
