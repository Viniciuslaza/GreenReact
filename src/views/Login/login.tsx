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
import { Col, Tooltip, Typography } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";
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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [screenW, setScreenW] = useState(window.screen.width);
  const [errorCode, setErrorCode] = useState<string>();

  window.addEventListener("resize", () => {
    setScreenW(window.screen.width);
  });

  function navigateSign(): void {
    navigate("/sign-up");
  }

  function navigateForgot(): void {
    navigate("/forgot-password");
  }

  const handleLogin = async (e: any): Promise<void> => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((result) => {
          localStorage.setItem("myCurrentUser", result);
          navigate("/");
        });
      })
      .catch((error) => {
        setErrorCode(error.code);
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
            {errorCode === "auth/wrong-password" && (
              <Typography.Text style={{ color: "red" }}>
                Senha ou E-mail estão incorretos
              </Typography.Text>
            )}
            <ButtonLogin onClick={handleLogin} type="primary">
              Login
            </ButtonLogin>
            <Link onClick={navigateForgot} target="_blank">
              Esqueci minha senha?
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
