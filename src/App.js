import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import axios from "axios";

export default function App() {
  const [courses, setCourses] = useState([]);

  const handleSearchSubmit = async (event, searchTerm) => {
    event.preventDefault();
    
    axios
      .get("/courses", {
        params: {
          searchTerm: searchTerm,
        },
      })
      .then((response) => {
        setCourses(response.data.results);
      })
      .catch(err => console.log(err))
  };

  return (
    <>
      <NavBar />
      {console.log(courses)}
      <div>
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
    </>
  );
}
