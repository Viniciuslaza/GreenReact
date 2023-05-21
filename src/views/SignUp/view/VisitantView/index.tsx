import React from "react";
import { Form, Input, Row } from "antd";
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

const VisitantRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSignUp = (values: IUser) => {
    const payloadValues = {
      ...values,
      role: "visitant",
    };
    delete payloadValues.password;
    delete payloadValues.confirm;
    createUser(values.email, values.password, payloadValues).then(() => {
      navigate("/login");
    });
  };

  return (
    <Row>
      <PageHeader colored backOption title="Cadastro de visitante" />
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

export default VisitantRegistration;
