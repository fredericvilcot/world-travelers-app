import { combineReducers } from "redux";
import cityList from "./retrieveCityList.reducer";

export const coreLogicState = combineReducers({ cityList });
