import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { createWrapper } from 'next-redux-wrapper';
import reducerA from './reducer/reducerA'
import reducerB from './reducer/reducerB';

export const makeStore = (context) => createStore(reducerA, applyMiddleware(thunk));


export const wrapper = createWrapper(makeStore, { debug: true })


