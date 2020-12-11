import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_CONFIRM_EMAIL_REQUEST,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_CONFIRM_EMAIL_FAIL,
  USER_ACCOUNT_REQUEST,
  USER_ACCOUNT_SUCCESS,
  USER_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
} from '../constants/userConstants'
import axios from 'axios'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGQzeWF3ZEBnbWFpbC5jb20iLCJleHAiOjE2MDgwNzUxMDl9.HYZMCHo0wme3ioeZjvyDzUmk2PkbUZEa_QlgX8tP-Mdo1uD_-V-5SFtu60K0BA82PiEephgDTHTTVjeBA1FlPg'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/login', { email, password }, config)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const register = (
  firstName,
  lastName,
  email,
  password,
  callback
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/users',
      { firstName, lastName, email, password },
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    callback()
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const confirmEmail = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONFIRM_EMAIL_REQUEST,
    })

    await axios.get(`/users/email-verification?token=${token}`, {
      data: {},
    })

    dispatch({
      type: USER_CONFIRM_EMAIL_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: USER_CONFIRM_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAccount = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ACCOUNT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: userInfo.token,
      },
      data: {},
    }

    const { data } = await axios.get(`/users/${userInfo.userId}`, config)

    dispatch({
      type: USER_ACCOUNT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateAccount = (account) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_ACCOUNT_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userInfo.token,
      },
    }

    const { data } = await axios.patch(
      `/users/${userInfo.userId}`,
      { ...account },
      config
    )

    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data
          : error.message,
    })
  }
}
