import { Card, Image, Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface CardOperatorProps {
  imgSrc?: string | undefined;
  name?: string | undefined;
  balance?: number | string | undefined;
  uri: string;
}

const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;


const CustomCard = styled(Card)`
  maxwidth: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardOperator: React.FC<CardOperatorProps> = ({
  imgSrc,
  name,
  balance,
  uri,
}) => {
  return (
    <CustomCard
      title={<Image width={200} preview={false} src={imgSrc} />}
      bordered={false}
    >
      <CardContent>
        <h2>{name}</h2>
        <Typography>
          Остаток баланса <br /> <b>{balance} RUB</b>
        </Typography>
        <Button block size="large">
          <Link to={`/refill/${uri}`}>Пополнить</Link>
        </Button>
      </CardContent>
    </CustomCard>
  );
};
