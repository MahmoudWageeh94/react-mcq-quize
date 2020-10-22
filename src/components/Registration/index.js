import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../store/actions/userAction";
const { Title } = Typography;

const Registration = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const onFinish = (values) => {
    dispatch(setUser(values.name));
    history.push("/question1");
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>Welcome to msq quize</Title>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Please Enter your name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Registration;
