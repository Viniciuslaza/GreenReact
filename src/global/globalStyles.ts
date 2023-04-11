import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  &&& {
    body {
      margin: 0;
      padding: 0;
    }


    .ant-input:focus,
    .ant-picker-focused,
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
      box-shadow: 0px 0px 0px 2px rgba(0, 187, 221, 0.2) !important;
    }

    .ant-input-affix-wrapper-focused {
      box-shadow: 0px 0px 0px 2px rgba(0, 187, 221, 0.2) !important;
    }

    .ant-menu-item-selected {
      background-color: #73D13D !important;
     
      &::before{
        border-bottom-color: #306808 !important;
      }
      &::after{
        border-bottom-color: #73D13D !important;
      }
      &:hover{
        border-bottom-color: #306808 !important
      }
    }

    .ant-menu-title-content{
      color: black;
      &::after{
        border-bottom-color: #73D13D !important;
      }
      &:hover{
        border-bottom-color: #306808 !important
      }
      
    }

    .ant-menu-inline,
    .ant-menu-horizontal,
    .ant-menu-item-selected {
      color: white;
      &::after{
        color: black;
        border-bottom-color: black;
      
      }
    }

    .ant-list-item-meta-title,
    .ant-select-item-option-content,
    .ant-select-selection-item {
      white-space: pre;
    }

    .ant-layout-sider-trigger {
      font-size: 20px;
    }

    .ant-btn-primary {
      border-radius: 2;
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    }
  }
`;
