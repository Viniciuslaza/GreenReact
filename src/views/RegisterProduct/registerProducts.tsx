import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Row } from "antd";
import { getUserById, postProducts } from "services/dbFunctions";
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
import { cidades } from "./helper/citys";

const RegisterProducts: React.FC = () => {
  const navigate = useNavigate();
  const data = getInfoUser();
  const [userData, setUserData] = useState<any>();
  const [form] = Form.useForm();

  useEffect(() => {
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

  const handleRegisterProduct = (values) => {
    const payload = {
      ...values,
      description: values?.description || null,
      phone: userData?.phone,
      user: userData?.id,
      user_hash_id: data?.user_id,
      userName: userData?.name,
    };
    postProducts(payload).then(() => {
      navigate("/products");
    });
  };

  return (
    <>
      <Row>
        <PageHeader backOption title="Cadastro de produto" />
        <StyledDivider plain />
        <StyledCol span={24}>
          <StyledDiv>
            <Form
              form={form}
              onFinish={handleRegisterProduct}
              layout="vertical"
              name="dynamic_form_complex"
              autoComplete="off"
            >
              <Form.Item
                rules={[{ required: true, message: "Campo obrigatório" }]}
                name="image"
                label="Imagem do produto"
              >
                <InputStyled size="large" placeholder="Imagem" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Campo obrigatório" }]}
                name="name"
                label="Escreva o nome do produto"
              >
                <InputStyled
                  maxLength={100}
                  size="large"
                  placeholder="Titulo"
                />
              </Form.Item>
              <Form.Item name="description" label="Descrição do produto">
                <Input.TextArea size="large" placeholder="Descrição" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Campo obrigatório" }]}
                name="price"
                label="Preço"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
                  addonBefore="R$"
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Campo obrigatório" }]}
                name="location"
                label="Local do anúncio"
              >
                <StyledSelect
                  options={cidades.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  size="large"
                  placeholder="Onde este produto está?"
                  showSearch
                  allowClear
                  optionFilterProp="label"
                />
              </Form.Item>
              <ButtonContinueStyled type="primary" onClick={form.submit}>
                Cadastrar
              </ButtonContinueStyled>
            </Form>
          </StyledDiv>
        </StyledCol>
      </Row>
    </>
  );
};
export default RegisterProducts;
