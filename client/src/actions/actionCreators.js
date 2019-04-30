import { FETCH_USER, FETCH_USER_REQUEST } from "./constants";

export const fetchUserSuccess = payload => ({
  type: FETCH_USER,
  payload
})

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
}) 

export const handleToken = payload => ({
  type: FETCH_USER,
  payload
})