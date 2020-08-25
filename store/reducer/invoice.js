import { createWrapper, HYDRATE } from 'next-redux-wrapper';


const initialState = {

}


const reducerA = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      // if (action.payload.app === 100) delete action.payload.app;
      // if (action.payload.page === 100) delete action.payload.page;
      return { ...state, ...action.payload };
    case 'reducerA/setCounter':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    default:
      return state
  }
}

export default reducerA