import { combineReducers } from "redux"
import authReducer from "./authReducer"
import { reducer as formRducer } from "redux-form"
import streamReducer from "./streamReducer"

export default combineReducers({
  auth: authReducer,
  form: formRducer,
  streams: streamReducer
})
