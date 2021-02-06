import speedmovie from './speedmovie.jpg';
import React from 'react';
import treebackground from './treebackground.jpg';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";

const App = () => {
  const coolplaceslist = ["Hawaii","Bates College", "The Beach", "The Mariana Trench"]
  var coolplaceMap = coolplaceslist.map((coolplace) => {
    <p classname = "pretty-text"> A place I think is cool is (coolplace)</p>
  })
  var answer = null
  const movie = (event) => {
    if (event.target.value === "y")
      answer = "Great, I love that movie."
    else (
      answer = "Bad. You should watch it, it's my favorite movie."
    )
    console.log (answer)
  }
  return (
    <div><Navbar />
      <p classname = "heading">
        Welcome to my website! :D
      </p>
      <img src={speedmovie} classname = "image"></img>
      <p classname = "pretty-text">
        Have you seen the movie Speed? y or n
      </p>
      <input onChange={movie} type="text"/>
      <p>{answer}</p>
      <footer classname = "pretty-text">
      <button><p>This button doesn't work yet, it does nothing</p></button>
      </footer>
    </div>
  );
}

export default App;
