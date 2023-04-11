import { Button, Col, Divider, Input } from "antd";
import styled from "styled-components";

export const StyledDivider = styled(Divider)`
  width: 30px;
  margin-left: 75px;
  margin-right: 75px;
`;

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 40%;
  margin-left: 75px;
`;

export const InputStyled = styled(Input)`
  margin-bottom: 1rem;
`;

export const ButtonContinueStyled = styled(Button)`
  margin-top: 25px;
  width: 100%;
  margin-bottom: 10px;
`;
