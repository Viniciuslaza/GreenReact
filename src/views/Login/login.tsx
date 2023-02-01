/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Col, Tooltip } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  ButtonLogin,
  ButtonSignUp,
  ColMain,
  DivInside,
  ImageIcon,
  ImageLogin,
  InputEmail,
  InputPassword,
  PrincipalRow,
} from "./loginStyle";
import { auth } from "../../services/firebase";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [screenW, setscreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setscreenW(window.screen.width);
  });

  function navigateSign(): void {
    navigate("/signup");
  }

  function navigateForgot(): void {
    navigate("/forgotpassword");
  }

  const handleLogin = (e: any): void => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <PrincipalRow>
        <Col span={screenW > 865 ? 12 : 0}>
          <ImageLogin src="assets/green.jpg" />
        </Col>
        <ColMain span={screenW > 865 ? 12 : 24}>
          <DivInside style={{ width: "45%" }}>
            <ImageIcon
              preview={false}
              src="https://media.istockphoto.com/id/1328171110/pt/vetorial/tree-with-leaves.jpg?b=1&s=170667a&w=0&k=20&c=Kh8ki_RqTcTz1-lMTiPiltT8-Xb-7Q1ezQCgDNiDGC4="
            />
            <InputEmail
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
            <InputPassword
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone style={{ color: "rgba(0,0,0,.45)" }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                )
              }
            />
            <ButtonLogin onClick={handleLogin} type="primary">
              Login
            </ButtonLogin>
            <Link onClick={navigateForgot} target="_blank">
              Forgot your password?
            </Link>

            <ButtonSignUp
              type="default"
              style={{ marginTop: "75px", width: "100%", marginBottom: "10px" }}
              onClick={navigateSign}
            >
              Sign Up
            </ButtonSignUp>
          </DivInside>
        </ColMain>
      </PrincipalRow>
    </>
  );
};

export default Login;
