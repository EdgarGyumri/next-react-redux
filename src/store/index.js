import { applyMiddleware, createStore } from "redux";
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export const makeStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const store = makeStore()

export const wrapper = createWrapper(makeStore, {debug: true});