import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import axios from 'axios'


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);





  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    // const city = await getCity();
  }


  return (
    <>
    <NavBar />
    <div>
      <SearchBar term={searchTerm} handleSearchSubmit={handleSearchSubmit}/>
    </div>
    </>
  )
}

