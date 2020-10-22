import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetScore } from "../../store/actions/scoreAction";
import { resetAnswerd } from "../../store/actions/questionsAction";
import {Row, Col, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;


const Result = ({ user, score}) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(resetScore());
      dispatch(resetAnswerd());
      history.push("/")
  }
  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>Hi, {user}</Title>
        <Paragraph>
          Your result is <span style={{ color: "#1890ff" }}>{score}</span> / 10
        </Paragraph>
        <Button type="primary" onClick={handleClick}>
          Try Again!
        </Button>
      </Col>
    </Row>
  );
};

export default Result;
