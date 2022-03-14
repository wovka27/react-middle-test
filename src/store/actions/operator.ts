import {
  OperatorActionTypes,
  OperatorDataType,
} from "../../types/store/OperatorType";
import { QueryRequest } from "../../types/store/reduxMiddleWareType";

export const getOperators =
  (): QueryRequest<OperatorActionTypes.GET_OPERATORS> => {
    return {
      type: OperatorActionTypes.GET_OPERATORS,
      payload: {
        request: {
          url: "/operator",
          method: "get",
        },
      },
    };
  };

export const setOperatorBalance = (
  id: string | number | undefined,
  data: OperatorDataType
): QueryRequest<OperatorActionTypes.SET_OPERATORS_BALANCE> => {
  return {
    type: OperatorActionTypes.SET_OPERATORS_BALANCE,
    payload: {
      request: {
        url: `/operator/${id}/`,
        method: "PATCH",
        data,
      },
    },
  };
};



