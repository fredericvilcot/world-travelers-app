import { AnyAction } from "redux";

const countries = (state: string[] | null = null, action: AnyAction) => {
  if (action.type === "RETRIEVED_COUNTRIES") {
    return {
      ...state,
      list: null,
    };
  }
  return state;
};

export default countries;
