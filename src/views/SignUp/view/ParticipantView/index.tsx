import React, { useState } from "react";
import {
  Col,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/dbFunctions";
import { IUser } from "views/SignUp/model/newUserModel";
import { PageHeader } from "components/PageHeader";
import {
  StyledButton,
  StyledColVisitant,
  StyledDivButtonVisitant,
  StyledDivVisitant,
} from "./Style";

const ParticipantRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);

  const handleSignUp = (values: IUser) => {
    const payloadValues = {
      ...values,
      role: "participant",
    };
    delete payloadValues.password;
    delete payloadValues.confirm;
    createUser(values.email, values.password, payloadValues).then(() => {
      navigate("/login");
    });
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Row>
      <PageHeader backOption title="Cadastro de parceiro" />
      <StyledColVisitant span={24}>
        <StyledDivVisitant>
          <Form
            style={{ padding: "20px" }}
            form={form}
            onFinish={handleSignUp}
            layout="vertical"
            requiredMark={false}
            name="dynamic_form_complex"
            autoComplete="off"
          >
            <Typography.Text style={{ fontWeight: "500" }}>
              Tipo de cadastro
            </Typography.Text>
            <Form.Item name="radioOption" initialValue={1}>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Pessoa física</Radio>
                <Radio value={2}>Empresa</Radio>
              </Radio.Group>
            </Form.Item>
            {value === 1 ? (
              <>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha seu CPF",
                    },
                    {
                      max: 11,
                      message: "O CPF deve possuir 14 dígitos",
                    },
                    {
                      min: 11,
                      message: "O CPF deve possuir 14 dígitos",
                    },
                  ]}
                  name="cpf"
                  label="CPF"
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor adicione sua formação acadêmica",
                    },
                  ]}
                  name="formation"
                  label="Formação acadêmica"
                >
                  <Input />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha o CNPJ da sua empresa",
                    },
                    {
                      max: 14,
                      message: "O CNPJ deve possuir 14 dígitos",
                    },
                    {
                      min: 14,
                      message: "O CNPJ deve possuir 14 dígitos",
                    },
                  ]}
                  name="cnpj"
                  label="CNPJ"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor preencha a Razão social",
                    },
                    {
                      max: 100,
                      message:
                        "A Razão social pode conter no máximo 150 caracteres",
                    },
                    {
                      min: 3,
                      message:
                        "A Razão social deve conter no mínimo 3 caracteres",
                    },
                  ]}
                  name="social_name"
                  label="Razão social"
                >
                  <Input />
                </Form.Item>
              </>
            )}
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Por favor adicione seu nome",
                },
                {
                  max: 100,
                  message: "Máximo de 100 caracteres",
                },
                {
                  min: 10,
                  message: "Mínimo de 10 caracteres",
                },
              ]}
              name="name"
              label="Nome completo"
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  type: "email",
                  message: "Os dados inseridos não são de um email válido",
                },
                {
                  required: true,
                  message: "Email obrigatório",
                },
              ]}
              name="email"
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Senha"
              rules={[
                {
                  required: true,
                  message: "Por favor adicione uma senha",
                },
                {
                  max: 20,
                  message: "Senhas devem conter no maximo 20 caracteres",
                },
                {
                  min: 6,
                  message: "Senhas devem conter no minimo 6 caracteres",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirmar senha"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor confirme sua senha",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("As senhas não conferem"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Row>
              <Col span={12} style={{ paddingRight: "7px" }}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor adicione um telefone",
                    },
                  ]}
                  name="phone"
                  label="Celular para contato"
                >
                  <Input placeholder="(99)-000000000" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Por favor adicione uma cidade",
                    },
                  ]}
                  name="city"
                  label="Cidade"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Por favor adicione um logradouro",
                },
              ]}
              name="address"
              label="Logradouro e complemento"
            >
              <Input />
            </Form.Item>
          </Form>
          <StyledDivButtonVisitant>
            <StyledButton type="primary" onClick={form.submit}>
              Cadastrar
            </StyledButton>
          </StyledDivButtonVisitant>
        </StyledDivVisitant>
      </StyledColVisitant>
    </Row>
  );
};

export default ParticipantRegistration;
