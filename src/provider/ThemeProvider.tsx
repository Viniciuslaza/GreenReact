import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ConfigProvider, Empty } from "antd";
import { GlobalStyle } from "global/globalStyles";
import { theme } from "global/theme";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#306808",
      },
    }}
    renderEmpty={() => <Empty description="Sem dados" />}
  >
    <GlobalStyle />
    <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
  </ConfigProvider>
);
