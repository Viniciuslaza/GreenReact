import React, { useEffect, useState } from "react";
import { Input, Row, Typography } from "antd";
import { getUserById, postProjects } from "services/dbFunctions";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "components/PageHeader";
import { getInfoUser } from "provider/UserProvider";
import {
  ButtonContinueStyled,
  InputStyled,
  StyledCol,
  StyledDiv,
  StyledDivider,
  StyledSelect,
} from "./Style";

const { Text } = Typography;

const RegisterEvents: React.FC = () => {
  const [image, setImage] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [empty, setEmpty] = useState<boolean>();
  const [linksSupport, setLinksSupport] = useState<string>();
  const [focus, setFocus] = useState<any>();
  const navigate = useNavigate();
  const data = getInfoUser();
  const [userData, setUserData] = useState<any>();
  const [object, setObject] = useState<any>();

  const areas = [
    { id: 0, name: "Biologia Celular" },
    { id: 1, name: "Física" },
    { id: 2, name: "Genética e Evolução" },
    { id: 3, name: "Química" },
    { id: 4, name: "Zoologia" },
    { id: 5, name: "Geologia" },
    { id: 6, name: "Bioquímica" },
    { id: 7, name: "Biomedicina" },
    { id: 8, name: "Geomorfologia" },
    { id: 9, name: "Biogeografia" },
    { id: 10, name: "Ecologia de Populações" },
    { id: 11, name: "Agroecossistemas" },
    { id: 12, name: "Ecologia" },
    { id: 13, name: "Ecossistemas" },
    { id: 14, name: "Sistemática Vegetal" },
    { id: 15, name: "Ecologia de Campo" },
    { id: 16, name: "Hidrologia" },
  ];

  useEffect(() => {
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

  useEffect(() => {
    const filter = areas.filter((item) => focus === item.id);
    setObject(filter[0]);
  }, [focus]);

  const handleRegister = () => {
    if ((title && description !== "" && image) || undefined) {
      const payload = {
        title,
        description,
        image,
        link: linksSupport || null,
        public: true,
        area: object || null,
        user: userData?.id,
        user_hash_id: data?.user_id,
        userName: userData?.name,
      };
      postProjects(payload).then(() => {
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
            <Text>Área de atuação</Text>
            <StyledSelect
              maxLength={100}
              value={focus}
              onChange={(e) => setFocus(e)}
              options={areas.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              size="large"
              allowClear
              showSearch
              optionFilterProp="label"
              placeholder="Qual o assunto desse projeto?"
            />
            <Text>Link de Suporte - (Opcional)</Text>
            <InputStyled
              onChange={(e) => {
                setLinksSupport(e.target.value);
              }}
              value={linksSupport}
              size="large"
              placeholder="Link de apoio"
            />
            <Text>Descreva o evento.</Text>
            <Input.TextArea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={5}
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
