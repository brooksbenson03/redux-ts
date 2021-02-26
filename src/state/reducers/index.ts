import { combineReducers } from 'redux'
import reposReducer from './repos'

const reducers = combineReducers({
  repos: reposReducer
})

export default reducers