import React, { FC } from "react";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";

const Header: FC = () => {
  return (
    <Layout.Header>
      <Title type="danger">Test</Title>
    </Layout.Header>
  );
};

export default Header;
