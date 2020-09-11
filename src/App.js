import React, {useState} from 'react'
import SearchBar from './components/SearchBar'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);


  return (
    <div>
      <SearchBar />
    </div>
  )
}

