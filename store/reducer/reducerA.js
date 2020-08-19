import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initialState = {
  counter: 100
}
const reducerA = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'reducerA/setCounter':
      console.log('vahjcvhjvschjvhjv', action.payload)
      return {
        ...state,
        counter: state.counter + action.payload
      }
    default:
      return state
  }
}

export default reducerA