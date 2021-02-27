import { useState } from 'react'
import { useSelector, useActions } from '../hooks/';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepos } = useActions()
  const { repos, error, loading } = useSelector((state) => state.repos)

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && repos.map(r => <div>{r}</div>)}
    </div>
  )
}

export default RepositoriesList