import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);


  return (
    <>
    <NavBar />
    <div>
      <SearchBar />
    </div>
    </>
  )
}

