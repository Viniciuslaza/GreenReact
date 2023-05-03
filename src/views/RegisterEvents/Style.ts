import { Button, Col, Divider, Input } from "antd";
import styled from "styled-components";

export const StyledDivider = styled(Divider)`
  width: 30px;
  margin-right: 75px;
  margin: 15px 0px;
`;

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 50%;
  margin-left: 35px;
`;

export const InputStyled = styled(Input)`
  margin-bottom: 1rem;
`;

export const ButtonContinueStyled = styled(Button)`
  margin-top: 25px;
  width: 100%;
  margin-bottom: 10px;
`;
