import initialState from '../initialState/counter'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        broj: state.broj + 1
      }
    }
    case DECREMENT: {
      return {
        ...state,
        broj: state.broj - 1
      }
    }
    default: {
      return state
    }
  }
}

export const incrementCounter = () => (dispatch, getState) => {
  dispatch({
    type: INCREMENT,
  })
}

export const decrementCounter = () => (dispatch, getState) => {
  dispatch({
    type: DECREMENT,
  })
}
