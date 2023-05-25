import { Avatar, Col, Row, Typography, theme } from "antd";
import React, { useState, useEffect } from "react";
import {
  getInfoUser,
  getNameLetters,
  stringToColor,
} from "provider/UserProvider";
import { getUserById } from "services/dbFunctions";
import { FullContentSpin } from "components/FullContentSpin";
import { useParams } from "react-router-dom";
import { PageHeader } from "components/PageHeader";
import { LayoutMain } from "./Style";

const Profile: React.FC = () => {
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
        setUserData(result[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading)
    return <FullContentSpin style={{ height: "calc(100vh - 3.5rem)" }} />;
  return (
    <>
      <PageHeader title={id ? "Perfil do usuário" : "Seu perfil"} />
      <LayoutMain
        style={{
          background: colorBgContainer,
          display: "flex",
          alignContent: "center",
        }}
      >
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
              </Col>
              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
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
              </Col>
              <Col
                style={{ paddingTop: "10px" }}
                span={screenW > 500 ? 12 : 24}
              >
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
            </>
          )}
        </Row>
      </LayoutMain>
    </>
  );
};

export default Profile;
