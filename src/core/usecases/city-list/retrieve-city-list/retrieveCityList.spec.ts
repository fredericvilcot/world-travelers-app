import { AppState } from "../../../../store/appState";
import { configureStore, ReduxStore } from "../../../../store/store";

describe("Retrieve a city list", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = configureStore();
    initialState = store.getState();
  });

  it("should retrieve no city list if there are none available", () => {
    store.dispatch({ type: "RETRIEVED_SHOPPING_LIST" });
    expect(store.getState().coreLogicState).toEqual({
      ...initialState.coreLogicState,
      cityList: {
        list: null,
      },
    });
  });
});
