import React, { useState } from "react";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  AppleFilled,
} from "@ant-design/icons";
import { Button, Col, Image, Input, Row, Tooltip } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [screenW, setscreenW] = useState(window.screen.width);
  window.addEventListener("resize", (event) => {
    setscreenW(window.screen.width);
  });

  function navigateSign() {
    navigate("/signup");
  }

  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Col span={screenW > 865 ? 12 : 0}>
          <Image
            style={{ height: "100vh" }}
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large_2x.jpg"
          />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={screenW > 865 ? 12 : 24}
        >
          <div style={{ width: "45%" }}>
            <AppleFilled style={{ fontSize: "45px", width: "100%" }} />

            <Input
              style={{ marginTop: "1rem", fontFamily: "Myriad Pro" }}
              placeholder="Username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
            <Input.Password
              style={{ marginTop: "0.8rem", fontFamily: "Myriad Set Pro" }}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Button
              type="primary"
              style={{ marginTop: "15px", width: "100%", marginBottom: "10px" }}
            >
              Login
            </Button>
            <Link href="https://ant.design" target="_blank">
              Forgot your password?
            </Link>

            <Button
              type="default"
              style={{ marginTop: "75px", width: "100%", marginBottom: "10px" }}
              onClick={navigateSign}
            >
              Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
