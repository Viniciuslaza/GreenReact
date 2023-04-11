import { Button, Col, Image, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const StyledColVisitant = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`;

export const StyledDivVisitant = styled.div`
  width: 25%;
  margin-top: 15px;
  background-color: #f2f3f4;
  border: 1px solid #f2f3f4;
  border-radius: 15px;
`;

export const StyledDivButtonVisitant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  border-radius: 0px;
  width: 75%;
  border-radius: 5px;
  margin-bottom: 40px;
`;

export const DivTitle = styled.div`
  text-align: center;
  margin-top: 15px;
`;

export const TextTitle = styled(Text)`
  font-size: 22px;
  font-weight: 450;
`;

export const DivImage = styled.div`
  text-align: center;
  margin-top: 25px;
`;

export const ImageReset = styled(Image)`
  &&& {
    font-size: 15px;
    width: 69px;
    height: 69px;
  }
`;
