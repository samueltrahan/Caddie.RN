import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({ handleSearchSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <div>
      <div className="ui form">
        <div>
          <form className="field" onSubmit={(event) => handleSearchSubmit(event, searchTerm)} >
            <label>Search City</label>
            <input value={searchTerm} onChange={onInputChange} className="input" type="text" />
            <button className="ui button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchBar