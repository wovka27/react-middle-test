import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RefillOperator from "../../components/RefillOperator";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { OperatorDataType } from "../../types/store/OperatorType";

const RefillPage = () => {
  const { id } = useParams<"id">();
  const { data } = useTypedSelector((state) => state.operator);
  const [operator, setOperator] = useState<OperatorDataType[]>();

  useEffect(() => {
    const item = data?.filter((item) => item.id === Number(id));
    item ? setOperator(item) : setOperator([]);
  }, [data, id]);

  return (
    <RefillOperator
      name={operator && operator[0].name}
      balance={operator && operator[0].balance}
      image={operator && operator[0].image}
      id={operator && operator[0].id}
      phone={operator && operator[0].phone}
    />
  );
};

export default RefillPage;
