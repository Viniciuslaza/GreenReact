import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Upload,
  UploadProps,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getUserById, postProducts, uploadImage } from "services/dbFunctions";
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
  const [image, setImage] = useState<any>();

  const props: UploadProps = {
    onRemove: () => {
      setImage(null);
    },
    // eslint-disable-next-line consistent-return
    beforeUpload: (file) => {
      const isPNG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.name} Não é um arquivo de imagem`);
        return false || Upload.LIST_IGNORE;
      }
      setImage(file);
      return false;
    },
  };

  useEffect(() => {
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

  const handleRegisterProduct = (values) => {
    const payload = {
      ...values,
      image: image.name,
      description: values?.description || null,
      phone: userData?.phone,
      user: userData?.id,
      user_hash_id: data?.user_id,
      userName: userData?.name,
    };
    postProducts(payload)
      .then((result) => {
        uploadImage("Products", image, result);
      })
      .finally(() => {
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
                <Upload maxCount={1} {...props}>
                  <Button icon={<UploadOutlined />}>Selecione uma foto</Button>
                </Upload>
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
