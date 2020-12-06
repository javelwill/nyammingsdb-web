import {
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_SUCCESS,
  APPLICATION_LIST_FAIL,
  APPLICATION_DETAILS_REQUEST,
  APPLICATION_DETAILS_SUCCESS,
  APPLICATION_DETAILS_FAIL,
} from '../constants/applicationConstants'

export const applicationListReducer = (
  state = { applications: [] },
  action
) => {
  switch (action.type) {
    case APPLICATION_LIST_REQUEST:
      return { loading: true, applications: [] }
    case APPLICATION_LIST_SUCCESS:
      return { loading: false, applications: action.payload }
    case APPLICATION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const applicationDetailsReducer = (
  state = { application: {} },
  action
) => {
  switch (action.type) {
    case APPLICATION_DETAILS_REQUEST:
      return { ...state, loading: true }
    case APPLICATION_DETAILS_SUCCESS:
      return { loading: false, application: action.payload }
    case APPLICATION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
