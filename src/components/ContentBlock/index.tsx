import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getOperators} from "../../store/actions";
import { CardOperator } from "../CardOperator";

const Content = () => {
  const dispatch = useDispatch()
  const {data} = useTypedSelector(state=>state.operator)

  useEffect(()=> {
    dispatch(getOperators())
    // dispatch(setOperatorBalance(3, dt))
  }, [dispatch]);

  return (
    <div
      style={{
        alignItems: "stretch",
        justifyContent: "center",
        flexWrap: "wrap",
        display: "flex",
        gap: 20,
      }}
    >
      {data && data.map((btn, i) => (
        <CardOperator uri={`${btn.id}`} key={i} imgSrc={btn.image} name={btn.name} balance={btn.balance}/>
      ))}
    </div>
  );
};

export default Content;
