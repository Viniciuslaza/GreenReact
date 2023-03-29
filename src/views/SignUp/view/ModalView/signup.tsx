import React, { useState } from "react";
import { Form, Modal, Radio, RadioChangeEvent } from "antd";
import { useNavigate } from "react-router-dom";
import { Container } from "./Style";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen] = useState(true);
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleOk = (values: any) => {
    if (values.radioOption === 1) {
      navigate("/participant");
    } else {
      navigate("/visitor");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Container src="assets/forest.jpg" />
      <Modal
        title="Como você deseja se cadastrar?"
        open={isModalOpen}
        onOk={form.submit}
        cancelText="Voltar"
        okText="Salvar"
        onCancel={handleCancel}
        maskClosable={false}
      >
        <Form
          form={form}
          onFinish={(e) => handleOk(e)}
          layout="vertical"
          requiredMark={false}
          name="dynamic_form_complex"
          autoComplete="off"
        >
          <Form.Item name="radioOption" initialValue={1}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Participante</Radio>
              <Radio value={2}>Visitante</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Signup;
