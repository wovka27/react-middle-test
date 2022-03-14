import { combineReducers } from "redux";
import { operatorReducer } from "./operatorReducer";

const rootReducer = combineReducers({
  operator: operatorReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
