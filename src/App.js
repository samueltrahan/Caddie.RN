import React, { useState, useEffect } from "react";
import SearchBar from "./components/NavSearch/SearchBar";
import NavBar from "./components/NavSearch/NavBar";
import Courses from "./components/CourseDisplay/Courses";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import CourseDetails from './components/CourseDetails/CourseDetails'
import "./App.css";

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
      .catch((err) => console.log(err));
  };

 

  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
        <Courses courses={courses}  />
      </Route>
      <Route  path='/course-details/:id' render={() =>
        <CourseDetails />
      } />
    </Router>
  );
}
