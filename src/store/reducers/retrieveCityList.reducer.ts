import { AnyAction } from "redux";

const cityList = (state: string[] | null = null, action: AnyAction) => {
  if (action.type === "RETRIEVED_SHOPPING_LIST") {
    return {
      ...state,
      list: null,
    };
  }
  return state;
};

export default cityList;
