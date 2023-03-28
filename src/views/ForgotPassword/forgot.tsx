import React from "react";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Text } = Typography;

const Forgot: React.FC = () => {
  const navigate = useNavigate();

  function navigateSign() {
    navigate("/sign-up");
  }

  return (
    <>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
          span={5}
        >
          <div style={{ marginLeft: "75px" }}>
            <Title level={5}>ID Apple</Title>
          </div>
        </Col>
        <Divider
          style={{ width: "30px", marginLeft: "75px", marginRight: "75px" }}
          plain
        />
        <Col
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
          span={24}
        >
          <div style={{ width: "40%", marginLeft: "75px" }}>
            <Title level={2}>Having trouble logging in?</Title>
            <Text>Enter your Apple ID to get started.</Text>
            <Input
              size="large"
              style={{ marginTop: "1rem" }}
              placeholder="ID Apple"
            />

            <Button
              type="primary"
              style={{ marginTop: "25px", width: "100%", marginBottom: "10px" }}
              onClick={() => navigateSign()}
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Forgot;
