import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { eventReducer } from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development" ? typeof window != 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const reducers = combineReducers({
  state: eventReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
