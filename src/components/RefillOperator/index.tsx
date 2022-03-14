import { Button, Descriptions, Image, Layout, PageHeader } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { OperatorDataType } from "../../types/store/OperatorType";
import RefillForm from "../Form";

const CustomDescriptions = styled(Descriptions).attrs({
  contentStyle: {
    display: "flex",
    flexWrap: "wrap",
  },
})``;

const ContentLayout = styled(Layout)`
  padding-top: 20px;
  min-height: 280;
`;

const ImageContainer = styled.div`
  max-width: 300px;
  height: 300px;
`;
const CustomImage = styled(Image)`
  object-fit: cover;
`;

const RefillOperator: React.FC<OperatorDataType> = ({
  name,
  balance,
  image,
  id,
  phone,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const showModal = () => setVisible(true);
  return (
    <Layout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Назад"
        extra={[
          <Button key="1" type="primary" onClick={showModal}>
            Операция пополнения
          </Button>,
        ]}
      >
        <CustomDescriptions>
          <Descriptions.Item label="Оператор">
            <b>{name}</b>
          </Descriptions.Item>
          <Descriptions.Item label="Остаток">
            <b>{balance} RUB</b>
          </Descriptions.Item>
          <Descriptions.Item label="Телефон">
            <b>{phone}</b>
          </Descriptions.Item>
        </CustomDescriptions>
      </PageHeader>
      <ContentLayout
        className="site-layout-background"
      >
        <ImageContainer>
        <CustomImage src={image} />
        </ImageContainer>
      </ContentLayout>
      <RefillForm close={() => setVisible(false)} visible={visible} id={id} />
    </Layout>
  );
};

export default RefillOperator;
