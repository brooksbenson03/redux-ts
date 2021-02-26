import { ActionType } from '../action-types'
import { Actions } from '../actions'

interface State {
  loading: boolean
  error: string | null
  repos: string[]
}

const initialState = {
  loading: false,
  error: null,
  repos: []
}

export default (state: State = initialState, action: Actions):State => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { ...state, loading: true, error: null, repos: [] }
    case ActionType.SEARCH_SUCCESS:
      return { ...state, loading: false, error: null, repos: [...action.payload ]}
    case ActionType.SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload, repos: [] }
    default:
      return state
  }
}
