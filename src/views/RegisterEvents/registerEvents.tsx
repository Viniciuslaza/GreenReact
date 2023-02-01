import React, { useState } from "react";
import { Button, Col, Divider, Input, Row, Typography } from "antd";
import { postEventos } from "services/dbFunctions";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Text } = Typography;

const RegisterEvents: React.FC = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [empty, setEmpty] = useState<boolean>();
  const navigate = useNavigate();

  const handleRegister = () => {
    if ((title && description !== "") || undefined) {
      postEventos(title, description).then(() => {
        setEmpty(false);
        navigate("/");
      });
    } else {
      setEmpty(true);
    }
  };

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
            <Title level={5}>Novo Evento</Title>
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
            <Title level={2}>Cadastro de novo evento</Title>
            <Text>Escreva o titulo do eventos</Text>
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              style={{ marginBottom: "1rem" }}
              size="large"
              placeholder="Titulo"
            />
            <Text>Descreva o evento.</Text>
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              size="large"
              placeholder="Descrição"
            />
            {empty && (
              <div style={{ paddingTop: "0.6rem" }}>
                <p style={{ color: "#FF0000" }}>
                  Complete todos os campos para realizar o cadastro
                </p>
              </div>
            )}
            <Button
              type="primary"
              style={{ marginTop: "25px", width: "100%", marginBottom: "10px" }}
              onClick={() => handleRegister()}
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RegisterEvents;
