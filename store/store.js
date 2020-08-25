import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducer/index';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = (context) => createStore(rootReducer);



export const wrapper = createWrapper(makeStore, { debug: true })


