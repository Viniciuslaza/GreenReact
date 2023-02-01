import { Image, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const DisplayPage = styled.div`
  display: flex;
  min-height: calc(100vh - 5px);
  justify-content: center;
  align-content: center;
`

export const LayoutMain = styled(Layout)`
  min-height: 60vh;
`
export const LogoDiv = styled(Image)`
&&&{
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
}
`
export const BarRight = styled.div`
  float: right;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`
export const LayoutSecond = styled.div`
  float: right;
  margin: 16px 0 16px 24px;
`
export const MenuBar = styled(Header)`
&&&{
  width: 100%;
  display: inline-flex;
  background: white;
}
`
export const MenuList = styled(Menu)`
&&&{
  background: white;
  border-radius: 5px;
}
`