import {
  OperatorActionType,
  OperatorActionTypes,
  OperatorStateType,
} from "../../types/store/OperatorType";

const initialState: OperatorStateType = {
  error: false,
  loading: false,
  data: null,
  balance: "",
  phone: "",
  status: false,
};

export const operatorReducer = (
  state = initialState,
  action: OperatorActionType
): OperatorStateType => {
  switch (action.type) {
    case OperatorActionTypes.GET_OPERATORS:
      return { ...state, loading: true };
    case OperatorActionTypes.GET_OPERATORS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case OperatorActionTypes.GET_OPERATORS_FAILURE:
      return { ...state, loading: false, error: true };
    case OperatorActionTypes.SET_OPERATORS_BALANCE:
      return { ...state, loading: true, status: false };
    case OperatorActionTypes.SET_OPERATORS_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        status: true,
        phone: action.payload.data.phone,
        balance: action.payload.data.balance,
      };
    case OperatorActionTypes.SET_OPERATORS_BALANCE_FAILURE:
      return { ...state, loading: false, error: true, status: false };

    default:
      return state;
  }
};
