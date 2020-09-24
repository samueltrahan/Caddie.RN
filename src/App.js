import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import axios from "axios";
import "./App.css";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState([])

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
      .catch((err) => console.log(err));
  };

  const getCourseDetails = async (event, courseId) => {
    event.preventDefault();
    axios.get('/details', {
      params: {
        courseId: courseId,
      },
    })
    .then((response) => {
      setCourseDetails(response.data.results)
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar />
      <div>
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
      <div>
        <Courses courses={courses} getCourseDetails={getCourseDetails} />
      </div>
    </>
  );
}
