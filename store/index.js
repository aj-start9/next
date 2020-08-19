import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = (initialState={},context) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};


export const wrapper = createWrapper(makeStore, { debug: true })


