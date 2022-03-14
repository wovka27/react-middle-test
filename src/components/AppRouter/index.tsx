import { Layout } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routes";

const AppRouter: React.FC = () => {
  return (
    <Layout.Content style={{ padding: 20 }}>
      <Routes>
        {routes.map((route, id) => (
          <Route key={id} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Layout.Content>
  );
};

export default AppRouter;
