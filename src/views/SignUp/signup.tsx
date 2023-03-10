import React from "react";
import { Button, Col, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  function navigateSign() {
    navigate("/signup");
  }

  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={24}
        >
          <div style={{ width: "30%" }}>
            <Title style={{ textAlign: "center" }} level={2}>
              GreenSolution Registration
            </Title>
            <Input style={{ marginTop: "1rem" }} placeholder="First name" />
            <Input style={{ marginTop: "1rem" }} placeholder="Last name" />
            <Row style={{ marginTop: "1rem" }} gutter={8}>
              <Col span={4}>
                <Input placeholder="DDD" />
              </Col>
              <Col span={20}>
                <Input placeholder="Phone number" />
              </Col>
            </Row>

            <Button
              type="primary"
              style={{ marginTop: "25px", width: "100%", marginBottom: "10px" }}
              onClick={() => navigateSign()}
            >
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
