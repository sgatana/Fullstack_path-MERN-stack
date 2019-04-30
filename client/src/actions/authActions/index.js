import axios from 'axios'
import { fetchUserSuccess, fetchUserRequest } from '../actionCreators'

export const fetchUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const response = await axios.get('/api/user')
    dispatch(fetchUserSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}
