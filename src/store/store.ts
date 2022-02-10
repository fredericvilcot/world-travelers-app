import { combineReducers, createStore, Store } from "redux";
import { coreLogicState } from "./reducers/coreLogicState.reducer";
import { AppState } from "./appState";

export const configureStore = (): Store<AppState> =>
  createStore(combineReducers({ coreLogicState }));

export type ReduxStore = Store<AppState>;
