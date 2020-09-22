import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({ handleSearchSubmit}) => {

  const [searchTerm, setSearchTerm] = useState('')

  const onInputChange = (event) => {
    console.log(event.target.value)
    setSearchTerm({searchTerm: event.target.value})
  }

  return (
    <>
      <div>
      <div className="ui form">
        <div>
          <form className="field" onSubmit={handleSearchSubmit} >
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