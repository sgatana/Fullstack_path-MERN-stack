import { FETCH_USER, FETCH_USER_REQUEST } from '../actions/constants'

const initialState = {
  user: '',
  isFetching: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_USER:
      return Object.assign({}, state, { user: action.payload, isFetching: false })
    default:
      return state
  }
}
