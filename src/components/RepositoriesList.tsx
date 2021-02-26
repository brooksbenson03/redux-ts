import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/use-actions'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepos } = useActions()
  const state = useSelector((state: any) => state.repos.repos
  console.log(state)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepos(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList