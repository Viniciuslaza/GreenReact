import React, { useState } from "react";
import { Input, Row, Typography } from "antd";
import { postProjects } from "services/dbFunctions";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "components/PageHeader";
import {
  ButtonContinueStyled,
  InputStyled,
  StyledCol,
  StyledDiv,
  StyledDivider,
} from "./Style";

const { Text } = Typography;

const RegisterEvents: React.FC = () => {
  const [image, setImage] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [empty, setEmpty] = useState<boolean>();
  const navigate = useNavigate();

  const handleRegister = () => {
    if ((title && description !== "" && image) || undefined) {
      postProjects(title, description, image).then(() => {
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
        <PageHeader backOption title="Cadastro de projeto" />
        <StyledDivider plain />
        <StyledCol span={24}>
          <StyledDiv>
            <Text>Adicione uma foto</Text>
            <InputStyled
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
              size="large"
              placeholder="Imagem"
            />
            <Text>Escreva o titulo do projeto</Text>
            <InputStyled
              maxLength={100}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
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
            <ButtonContinueStyled
              type="primary"
              onClick={() => handleRegister()}
            >
              Continue
            </ButtonContinueStyled>
          </StyledDiv>
        </StyledCol>
      </Row>
    </>
  );
};

export default RegisterEvents;
