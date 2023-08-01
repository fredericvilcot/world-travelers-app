import { AnyAction } from "redux";

const countries = (state: any[] | null = null, action: AnyAction) => {
  if (action.type === "RETRIEVED_COUNTRIES") {
    return {
      ...state,
      data: null,
    };
  }
  return state;
};

export default countries;
