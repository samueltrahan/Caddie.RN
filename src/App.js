import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);

  const onInputChange = (event) => {
    const input = {searchTerm: event.target.value}
    setSearchTerm({input})
  }

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    // const city = await getCity(searchTerm);
    // console.log(city)
  }


  return (
    <>
    <NavBar />
    <div>
      <SearchBar />
    </div>
    </>
  )
}

