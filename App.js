import speedmovie from './speedmovie.jpg';
import React from 'react';
import treebackground from './treebackground.jpg';
import './App.css';


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
    <div classname = "background"/*the goal of this is to have a tree image as the background*/> 
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
/* this below is the same, except App and movie are defined the way it says to do in the slides, and I get an error from them*/
/*
import speedmovie from './speedmovie.jpg';
import React from 'react';
import treebackground from './treebackground.jpg';
import './App.css';


function App () {
  const coolplaceslist = ["Hawaii","Bates College", "The Beach", "The Mariana Trench"]
  var coolplaceMap = coolplaceslist.map((coolplace) => {
    <p classname = "pretty-text"> A place I think is cool is (coolplace)</p>
  })
  var buttonpressedcount = 0
  var response = <input type="text"/>
  var responsecomponent = null
  function movie () {
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
    <div classname = "background"> 
    <p classname = "heading">
    Welcome to my website! :D
  </p>
  <img src={speedmovie} classname = "image"></img>
  <p classname = "pretty-text">
    Have you seen the movie Speed? y or n
  </p>
  <input type="text"></input>
  <footer classname = "pretty-text">
  <button><p>This button doesn't work yet, it does nothing</p></button>
  </footer>
</div>
);
}
*/

