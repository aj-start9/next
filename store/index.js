import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};


export const wrapper = createWrapper(initStore)


