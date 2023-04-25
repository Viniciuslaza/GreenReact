import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";


export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledContent = styled(Content)`
  &&& {
    min-height: calc(100vh - 5.75rem);
    padding: 0px 24px;
    overflow: hidden;
  }
`;

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
