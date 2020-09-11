import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div>
      <div className="ui form">
        <div>
          <form className="field" >
            <label>Search City</label>
            <input className="input" type="text" />
            <button className="ui green button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchBar