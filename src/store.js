import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  applicationListReducer,
  applicationDetailsReducer,
  applicationUpdateReducer,
  applicationResetKeyReducer
} from './reducers/applicationReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userConfirmEmailReducer,
} from './reducers/usersReducers'

const reducer = combineReducers({
  applicationList: applicationListReducer,
  applicationDetails: applicationDetailsReducer,
  applicationUpdate: applicationUpdateReducer,
  applicationResetKey: applicationResetKeyReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userConfirmEmail: userConfirmEmailReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
