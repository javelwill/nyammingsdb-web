import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  applicationListReducer,
  applicationDetailsReducer,
} from './reducers/applicationReducers'

const reducer = combineReducers({
  applicationList: applicationListReducer,
  applicationDetails: applicationDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
