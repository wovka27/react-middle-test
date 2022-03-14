import React, { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import { Footer } from "antd/lib/layout/layout";
import AppRouter from "./components/AppRouter";
import styled from "styled-components";

const CustomAppLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App: FC = () => {
  return (
    <CustomAppLayout>
      <Header />
      <AppRouter />
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </CustomAppLayout>
  );
};

export default App;
