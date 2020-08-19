const initialState = {
  counter: 100
}
const reducerA = (state = initialState, action) => {
  switch (action.type) {
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