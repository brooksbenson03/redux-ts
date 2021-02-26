import axios from 'axios'
import { Dispatch } from 'redux';
import { ActionType } from '../action-types'
import { Actions } from '../actions';

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SEARCH_REPOS
    })

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })

      dispatch({
        type: ActionType.SEARCH_SUCCESS,
        payload: data.objects.map((repo: any) => repo.package.name)
      })

    } catch (e) {
      dispatch({
        type: ActionType.SEARCH_FAILURE,
        payload: e.message
      })
    }
  }
}