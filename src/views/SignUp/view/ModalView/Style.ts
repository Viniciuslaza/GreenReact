import styled from "styled-components";
import { Modal } from "antd";

export const Container = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledModal = styled(Modal)`
  margin-top: 10%;
  .ant-btn-primary {
    border-radius: 2;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  }
`;
