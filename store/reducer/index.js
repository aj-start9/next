import { combineReducers } from "redux";
import reducerA from './reducerA';
import reducerB from './reducerB';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

const combineReducer = combineReducers({
    reducerA:reducerA,
    reducerB:reducerB
})


const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }
      if (state.count) nextState.count = state.count // preserve count value on client side navigation
      return nextState
    } else {
      return combineReducer(state, action)
    }
  }

export default rootReducer