import React from "react";
import { Form, Input, message, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "components/PageHeader";
import { sendResetCode } from "services/dbFunctions";
import {
  DivImage,
  DivTitle,
  ImageReset,
  StyledButton,
  StyledColVisitant,
  StyledDivButtonVisitant,
  StyledDivVisitant,
  TextTitle,
} from "./Style";

type EmailProp = {
  email: string;
};

const Forgot: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSignUp = (value: EmailProp) => {
    sendResetCode(value?.email).then(() => {
      message.open({
        type: "success",
        content: "Email enviado com sucesso",
      });
      navigate("/login");
    });
  };

  return (
    <>
      <Row>
        <PageHeader backOption title="Esqueceu sua senha?" />

        <StyledColVisitant span={24}>
          <StyledDivVisitant>
            <DivImage>
              <ImageReset preview={false} src="assets/FlatIcon.jpg" />
            </DivImage>
            <DivTitle>
              <TextTitle>Redefinição de senha</TextTitle>
            </DivTitle>

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
                Email
              </Typography.Text>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Por favor preencha seu Email",
                  },
                  {
                    max: 150,
                    message: "Limite máximo de 150 caracteres",
                  },
                  {
                    min: 3,
                    message: "Limite mínimo de 3 caracteres",
                  },
                ]}
                name="email"
              >
                <Input />
              </Form.Item>
              <Typography.Text style={{ fontWeight: "350", color: "#6b6b6b" }}>
                Digite seu email para que possamos te enviar um link, onde você
                poderá alterar a senha.
              </Typography.Text>
            </Form>
            <StyledDivButtonVisitant>
              <StyledButton type="primary" onClick={form.submit}>
                Enviar código
              </StyledButton>
            </StyledDivButtonVisitant>
          </StyledDivVisitant>
        </StyledColVisitant>
      </Row>
    </>
  );
};

export default Forgot;
