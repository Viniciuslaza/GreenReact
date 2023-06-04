import { Layout, Menu, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

const { Text } = Typography;

export const LayoutMain = styled(Layout)`
  min-height: 100vh;
`;

export const BarRight = styled.div`
  float: right;
  width: 90%;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;
export const LayoutSecond = styled.div`
  float: right;
  margin: 16px 0 16px 24px;
`;

export const MenuList = styled(Menu)`
  &&& {
    background: white;
    border-radius: 5px;
  }
`;

export const StyledContent = styled(Content)`
  &&& {
    min-height: calc(100vh - 5.75rem);
    padding: 0px 24px;
    overflow: hidden;
  }
`;

export const StyledText = styled(Text)`
  color: #2e2e37;
  font-size: 22px;
  padding: 30px 0 0 8px;
  font-weight: 600;
  margin: 0;
`;

export const PStyleText = styled.p`
  margin-left: 15px;
  color: rgb(104, 105, 118);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;
