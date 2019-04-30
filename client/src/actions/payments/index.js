import axios from 'axios'
import { handleToken } from '../actionCreators'

export const onHandleToken = async (token, dispatch) => {
  try {
    const response = await axios.post('/api/payment', token)
    console.log(response.data)
    dispatch(handleToken(response.data))
  } catch (error) {
    console.log('an error occured when recieving token', error)
  }
}
