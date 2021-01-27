import speedmovie from './speedmovie.jpg';
import React from 'react';
import './App.css';


App = () => {
  const coolplaceslist = ["Hawaii","Bates College", "The Beach", "The Mariana Trench"]
  coolplaceMap = coolplaceslist.map((coolplace) => {
    <p classname = "pretty-text"> A place I think is cool is (coolplace)</p>
  })
  var buttonpressedcount = 0
  var response = <input type="text"/>
  var responsecomponent = null
  movie = () => {
    var buttonpressedcount = 0
    var response = <input type="text"/>
    var responsecomponent = null
    if (response === "y")
      responsecomponent = "Great, I love that movie."
    else (
      responsecomponent = "Bad. You should watch it, it's my favorite movie."
    )
    return (responsecomponent)
  }
  return (
    <div>
      <p classname = "heading">
        Welcome to my website! :D
      </p>
      <img src={speedmovie} classname = "image"></img>
      <p classname = "pretty-text">
        Have you seen the movie Speed? y or n
      </p>
      <button onClick = {buttonpressedcount} = {buttonpressedcount + 1}></button>
      (buttonpressedcount)
    </div>
  );
}

export default App;

