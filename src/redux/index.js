import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/root.reducer";
import growsSaga from "./sagas/grows.saga";
import strainsSaga from "./sagas/strains.saga";

/**
 * Configure the redux store in a way which allows it to use various middlewares and enhancers.
 *
 * @param { Object } preloadedState The initial state of the redux store. This can be used to
 *  hydrate the store after the server side rendering has concluded.
 */
export const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // Initialize all the sagas which need to run
  sagaMiddleware.run(growsSaga);
  sagaMiddleware.run(strainsSaga);

  return store;
};
