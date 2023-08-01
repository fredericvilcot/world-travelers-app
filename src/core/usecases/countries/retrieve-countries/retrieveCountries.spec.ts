import { AppState } from "../../../../store/appState";
import { configureStore, ReduxStore } from "../../../../store/store";

describe("Retrieve  countries", () => {
  let store: ReduxStore;
  let initialState: AppState;

  beforeEach(() => {
    store = configureStore();
    initialState = store.getState();
  });

  it("should retrieve no countries if there are none available", () => {
    store.dispatch({ type: "RETRIEVED_SHOPPING_LIST" });
    expect(store.getState().coreLogicState).toEqual({
      ...initialState.coreLogicState,
      cityList: {
        list: null,
      },
    });
  });
});
