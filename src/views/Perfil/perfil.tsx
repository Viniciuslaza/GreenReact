import { Avatar, Col, Row, Typography, theme } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  FormOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import {
  getInfoUser,
  getNameLetters,
  stringToColor,
} from "provider/UserProvider";
import { getUserById } from "services/dbFunctions";
import { FullContentSpin } from "components/FullContentSpin";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutMain } from "./Style";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>();
  const data = getInfoUser();
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [screenW, setScreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenW(window.screen.width);
  });

  useEffect(() => {
    setLoading(true);
    getUserById(id || data?.user_id)
      .then((result: any) => {
        if (result[0]) {
          setUserData(result[0]);
        } else {
          navigate("/");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading)
    return <FullContentSpin style={{ height: "calc(100vh - 3.5rem)" }} />;
  return (
    <>
      <LayoutMain
        style={{
          background: colorBgContainer,
          display: "flex",
          alignContent: "center",
        }}
      >
        <Row>
          <Col span={22}>
            {id && id !== data?.user_id ? (
              <Typography.Text
                style={{
                  fontSize: "24px",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Perfil do usuário
              </Typography.Text>
            ) : (
              <Typography.Text
                style={{
                  fontSize: "24px",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                }}
              >
                Seu perfil:
              </Typography.Text>
            )}
          </Col>
          {(!id || id === data?.user_id) && (
            <Col
              span={2}
              style={{ marginTop: "10px", fontSize: "30px", cursor: "pointer" }}
            >
              <FormOutlined />
            </Col>
          )}
        </Row>
        {userData && (
          <Avatar
            style={{
              cursor: "pointer",
              backgroundColor: stringToColor(userData?.name),
              fontSize: "60px",
              marginLeft: "4rem",
              marginTop: "2rem",
            }}
            size={162}
          >
            {getNameLetters(userData?.name)}
          </Avatar>
        )}

        <Row
          style={{
            justifyContent: "center",
            paddingLeft: "4rem",
            paddingTop: "30px",
            maxWidth: "80%",
          }}
        >
          <Col span={screenW > 500 ? 12 : 24}>
            <Typography.Text style={{ fontWeight: "600", fontSize: "20px" }}>
              Nome:{" "}
            </Typography.Text>
            <Typography.Text style={{ fontWeight: "400", fontSize: "18px" }}>
              {userData?.name}
            </Typography.Text>
          </Col>
          <Col span={screenW > 500 ? 12 : 24}>
            <Typography.Text style={{ fontWeight: "600", fontSize: "20px" }}>
              Email:{" "}
            </Typography.Text>
            <Typography.Text style={{ fontWeight: "400", fontSize: "18px" }}>
              {userData?.email}
            </Typography.Text>
          </Col>
          <Col
            style={{ paddingTop: "15px" }}
            span={userData?.role === "visitant" || screenW < 500 ? 24 : 12}
          >
            <Typography.Text style={{ fontWeight: "600", fontSize: "20px" }}>
              Tipo de cadastro:{" "}
            </Typography.Text>
            <Typography.Text style={{ fontWeight: "400", fontSize: "18px" }}>
              {userData?.role === "visitant" ? "Visitante" : "Participante"}
            </Typography.Text>
          </Col>
          {userData?.role !== "visitant" && (
            <>
              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
                {(!id || id === data?.user_id) && (
                  <>
                    <Typography.Text
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      CPF/CPNJ:{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{ fontWeight: "400", fontSize: "18px" }}
                    >
                      {userData?.cpf || userData?.cnpj}
                    </Typography.Text>
                  </>
                )}
              </Col>

              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
                {(!id || id === data?.user_id) && (
                  <>
                    <Typography.Text
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Logradouro:{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{ fontWeight: "400", fontSize: "18px" }}
                    >
                      {userData?.address}
                    </Typography.Text>
                  </>
                )}
              </Col>

              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
                {(!id || id === data?.user_id) && (
                  <>
                    <Typography.Text
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Celular:{" "}
                    </Typography.Text>
                    <Typography.Text
                      style={{ fontWeight: "400", fontSize: "18px" }}
                    >
                      {userData?.phone}
                    </Typography.Text>
                  </>
                )}
              </Col>

              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
                <Typography.Text
                  style={{ fontWeight: "600", fontSize: "20px" }}
                >
                  Cidade:{" "}
                </Typography.Text>
                <Typography.Text
                  style={{ fontWeight: "400", fontSize: "18px" }}
                >
                  {userData?.city}
                </Typography.Text>
              </Col>
              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
                <Typography.Text
                  style={{ fontWeight: "600", fontSize: "20px" }}
                >
                  Formação:{" "}
                </Typography.Text>
                <Typography.Text
                  style={{ fontWeight: "400", fontSize: "18px" }}
                >
                  {userData?.formation}
                </Typography.Text>
              </Col>
              {userData?.linkedIn && (
                <Col
                  style={{ paddingTop: "60px" }}
                  span={screenW > 500 ? 12 : 24}
                >
                  <a href={userData?.linkedIn}>
                    <LinkedinOutlined
                      style={{ fontSize: "55px", color: "#0288D1" }}
                    />
                  </a>
                </Col>
              )}
              {userData?.instagram && (
                <Col
                  style={{ paddingTop: "60px" }}
                  span={screenW > 500 ? 12 : 24}
                >
                  <a href={userData?.instagram}>
                    <InstagramOutlined
                      style={{ fontSize: "55px", color: "#fb3958" }}
                    />
                  </a>
                </Col>
              )}
            </>
          )}
        </Row>
      </LayoutMain>
    </>
  );
};

export default Profile;
