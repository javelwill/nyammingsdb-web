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
} from '../constants/applicationConstants'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGQzeWF3ZEBnbWFpbC5jb20iLCJleHAiOjE2MDgwNzUxMDl9.HYZMCHo0wme3ioeZjvyDzUmk2PkbUZEa_QlgX8tP-Mdo1uD_-V-5SFtu60K0BA82PiEephgDTHTTVjeBA1FlPg'

export const listApplications = () => async (dispatch) => {
  try {
    dispatch({ type: APPLICATION_LIST_REQUEST })

    const { data } = await axios.get('/applications', {
      headers: { Authorization: AUTH_TOKEN },
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

export const listApplicationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPLICATION_DETAILS_REQUEST })

    const { data } = await axios.get(`/applications/${id}`, {
      headers: { Authorization: AUTH_TOKEN },
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
  dispatch
) => {
  try {
    dispatch({ type: APPLICATION_UPDATE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
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

export const resetApplicationKey = (applicationId) => async (dispatch) => {
  console.log("action - reset")
  try {
    dispatch({
      type: APPLICATION_RESET_KEY_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
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
