import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import axios from 'axios'


const key = process.env.REACT_APP_API_KEY

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);



  const getCity = async () => {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=golf+courses+${searchTerm}&key=${key}`)
    const data = await response.json()
    console.log(data)
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const city = await getCity();
    console.log(city)
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

