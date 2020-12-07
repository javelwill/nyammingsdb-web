import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  applicationListReducer,
  applicationDetailsReducer,
} from './reducers/applicationReducers'
import { userLoginReducer } from './reducers/usersReducers'

const reducer = combineReducers({
  applicationList: applicationListReducer,
  applicationDetails: applicationDetailsReducer,
  userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
