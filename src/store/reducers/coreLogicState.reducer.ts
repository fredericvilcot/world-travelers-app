import { combineReducers } from "redux";
import countries from "./countries.reducer";

export const coreLogicState = combineReducers({ countries });
