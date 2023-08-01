import {
  Action,
  combineReducers,
  createStore,
  Store,
  applyMiddleware,
} from "redux";
import { coreLogicState } from "./reducers/coreLogicState.reducer";
import { AppState } from "./appState";
import thunk, {
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

type Dependencies = {};

export const configureStore = (
  dependencies: Partial<Dependencies>
): Store<AppState> =>
  createStore(
    combineReducers({ coreLogicState }),
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(dependencies) as ThunkMiddleware<
          AppState,
          Action,
          any
        >
      )
    )
  );

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, Action>;
};
export type ThunkResult<R> = ThunkAction<R, AppState, Dependencies, Action>;

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload?: P
): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
