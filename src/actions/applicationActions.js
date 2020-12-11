import axios from 'axios'
import {
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_SUCCESS,
  APPLICATION_LIST_FAIL,
  APPLICATION_DETAILS_REQUEST,
  APPLICATION_DETAILS_SUCCESS,
  APPLICATION_DETAILS_FAIL,
  APPLICATION_UPDATE_REQUEST,
  APPLICATION_UPDATE_SUCCESS,
  APPLICATION_UPDATE_FAIL,
  APPLICATION_RESET_KEY_REQUEST,
  APPLICATION_RESET_KEY_SUCCESS,
  APPLICATION_RESET_KEY_FAIL,
  APPLICATION_CREATE_REQUEST,
  APPLICATION_CREATE_SUCCESS,
  APPLICATION_CREATE_FAIL,
} from '../constants/applicationConstants'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGQzeWF3ZEBnbWFpbC5jb20iLCJleHAiOjE2MDgwNzUxMDl9.HYZMCHo0wme3ioeZjvyDzUmk2PkbUZEa_QlgX8tP-Mdo1uD_-V-5SFtu60K0BA82PiEephgDTHTTVjeBA1FlPg'

export const listApplications = () => async (dispatch, getState) => {
  try {
    dispatch({ type: APPLICATION_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()


    const { data } = await axios.get('/applications', {
      headers: { Authorization: userInfo.token },
      data: {},
    })

    dispatch({
      type: APPLICATION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: APPLICATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listApplicationDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: APPLICATION_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()


    const { data } = await axios.get(`/applications/${id}`, {
      headers: { Authorization: userInfo.token },
      data: {},
    })

    dispatch({
      type: APPLICATION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: APPLICATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateApplication = (id, name, description) => async (
  dispatch, getState
) => {
  try {
    dispatch({ type: APPLICATION_UPDATE_REQUEST })


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
      `/applications/${id}`,
      { name, description },
      config
    )

    dispatch({ type: APPLICATION_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: APPLICATION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetApplicationKey = (applicationId) => async (dispatch, getState) => {
  console.log('action - reset')
  try {
    dispatch({
      type: APPLICATION_RESET_KEY_REQUEST,
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

    const { data } = await axios.post(
      '/applications/reset-key',
      { applicationId },
      config
    )

    dispatch({
      type: APPLICATION_RESET_KEY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: APPLICATION_RESET_KEY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createApplication = (name, description) => async (
  dispatch, getState
) => {
  try {
    dispatch({ type: APPLICATION_CREATE_REQUEST })


    const {
      userLogin: { userInfo },
    } = getState()


    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userInfo.token,
      },
    }

    const { data } = await axios.post(
      `/applications`,
      { name, description },
      config
    )

    dispatch({ type: APPLICATION_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: APPLICATION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
