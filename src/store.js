import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  applicationListReducer,
  applicationDetailsReducer,
  applicationUpdateReducer,
  applicationResetKeyReducer,
  applicationCreateReducer
} from './reducers/applicationReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userConfirmEmailReducer,
  userAccountReducer,
  updateAccountReducer
} from './reducers/usersReducers'

const reducer = combineReducers({
  applicationList: applicationListReducer,
  applicationDetails: applicationDetailsReducer,
  applicationUpdate: applicationUpdateReducer,
  applicationCreation: applicationCreateReducer,
  applicationResetKey: applicationResetKeyReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userConfirmEmail: userConfirmEmailReducer,
  userAccount: userAccountReducer,
  updateAccount: updateAccountReducer
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
