import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const initialState = {
  counter: 0
}
const reducerB = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case HYDRATE:
      // if (action.payload.app === "init") delete action.payload.app;
      // if (action.payload.page === "init") delete action.payload.page;
      return { ...state, ...action.payload };
    case 'reducerB/setCounter':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state
  }
}

export default reducerB