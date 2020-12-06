import axios from 'axios'
import {
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_SUCCESS,
  APPLICATION_LIST_FAIL,
  APPLICATION_DETAILS_REQUEST,
  APPLICATION_DETAILS_SUCCESS,
  APPLICATION_DETAILS_FAIL,
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
    dispatch({ type: APPLICATION_DETAILS_REQUEST})

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
