import React, {useState} from 'react'
import {
    TextField,
} from '@material-ui/core'

// App.tsxから関数をpropsで受け取る
interface SearchProps {
    search: (arg: string) => void
}

const Search: React.FC<SearchProps> = ({search}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault()
    search(searchValue)
    resetInputField()
  }

  return (
    <form onSubmit={callSearchFunction}>
      <TextField
        type='text'
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <TextField
        type='submit'
        value='検索する'
      />
    </form>
  )
}

export default Search