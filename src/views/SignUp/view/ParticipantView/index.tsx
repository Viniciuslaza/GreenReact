import React from "react";
import { Col, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/dbFunctions";
import { StyledButton } from "views/SignUp/sigUpStyle";
import { IUser } from "views/SignUp/model/newUserModel";

const { Title } = Typography;

const ParticipantRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSignUp = (values: IUser) => {
    const payloadValues = {
      ...values,
    };
    delete payloadValues.password;
    delete payloadValues.confirm;
    createUser(values.email, values.password, payloadValues).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <Row
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 240px 240px 240px",
        }}
      >
        <Col span={24}>
          <Title style={{ textAlign: "start" }} level={2}>
            Cadastro de parceiro
          </Title>
          <Form
            form={form}
            onFinish={handleSignUp}
            layout="vertical"
            requiredMark={false}
            name="dynamic_form_complex"
            autoComplete="off"
          >
            <Form.Item name="name" label="Nome completo">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
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
                <Form.Item name="phone" label="Celular para contato">
                  <Input placeholder="(99)-000000000" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="city" label="Cidade">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="address" label="Logradouro">
              <Input />
            </Form.Item>
            <Form.Item name="formation" label="Formação acadêmica">
              <Input />
            </Form.Item>
          </Form>
          <StyledButton
            type="primary"
            style={{ marginTop: "2px", width: "100%", marginBottom: "10px" }}
            onClick={form.submit}
          >
            Cadastrar
          </StyledButton>
        </Col>
      </Row>
    </>
  );
};

export default ParticipantRegistration;
