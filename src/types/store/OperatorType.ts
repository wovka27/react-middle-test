import {
  FailureResponse,
  QueryRequest,
  SuccessResponse,
} from "./reduxMiddleWareType";

export type OperatorStateType = {
  error: boolean;
  loading: boolean;
  data: OperatorDataType[] | null;
  phone: string | undefined;
  balance: number | string | undefined;
  status: boolean;
};

export enum OperatorActionTypes {
  GET_OPERATORS = "test/get_operators",
  GET_OPERATORS_SUCCESS = "test/get_operators_SUCCESS",
  GET_OPERATORS_FAILURE = "test/get_operators_FAIL",
  SET_OPERATORS_BALANCE = "test/set_operator_balance",
  SET_OPERATORS_BALANCE_SUCCESS = "test/set_operator_balance_SUCCESS",
  SET_OPERATORS_BALANCE_FAILURE = "test/set_operator_balance_FAIL",
}

export type OperatorActionType =
  | QueryRequest<OperatorActionTypes.GET_OPERATORS>
  | SuccessResponse<
      OperatorActionTypes.GET_OPERATORS_SUCCESS,
      OperatorDataType[]
    >
  | FailureResponse<OperatorActionTypes.GET_OPERATORS_FAILURE>
  | QueryRequest<OperatorActionTypes.SET_OPERATORS_BALANCE>
  | SuccessResponse<
      OperatorActionTypes.SET_OPERATORS_BALANCE_SUCCESS,
      OperatorDataType
    >
  | FailureResponse<OperatorActionTypes.SET_OPERATORS_BALANCE_FAILURE>;

export type OperatorDataType = {
  id?: number | undefined;
  name?: string | undefined;
  balance: string | number | undefined;
  image?: string | undefined;
  phone?: string | undefined;
  status?: boolean;
};
