import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MyReducer from "../reducer";

const promiseMiddleware = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    return next(action);
  }

  return next(action);
};

export const AppState = () => {
    return (
        {search:'' }
        );
}

let initialState = AppState();

if (typeof window !== "undefined" && window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;
}

export const myStore = createStore(
  MyReducer,
  initialState,
  applyMiddleware(promiseMiddleware, thunk)
);
