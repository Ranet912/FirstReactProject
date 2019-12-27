import initialState from '../initialState/formaRedux.js'

const ONSUBMIT = 'formaRedux/ONSUBMIT'

export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ONSUBMIT: {
      return {
        ...state,
        forma: payload
      }
    }
    default: {
      return state
    }
  }
}

export const onSubmit = (data) => (dispatch) => {
  dispatch({
    type: ONSUBMIT,
    payload: data
  })
}
