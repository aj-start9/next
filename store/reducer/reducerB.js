const initialState = {
    counter: 0
  }
const reducerB =  (state = initialState, action) => {
    switch (action.type) {
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