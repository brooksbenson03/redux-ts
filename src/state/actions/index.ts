import { ActionType } from '../action-types'

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS
}

interface SearchReposSuccessAction {
  type: ActionType.SEARCH_SUCCESS
  payload: string[]
}

interface SearchReposFailureAction {
  type: ActionType.SEARCH_FAILURE
  payload: string
}

export type Actions =     
  | SearchReposAction 
  | SearchReposSuccessAction 
  | SearchReposFailureAction