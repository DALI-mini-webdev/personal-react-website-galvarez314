import React, {Component} from 'react';
import { Map } from 'immutable';

class Nameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {firstname:"Gabe"};
            names: Map();
            nameID: 0;
    }

    changeState = () => {
        this.setState ({firstname: "Howard"})
    }

    render () {
        return (
            <div>
            <p>I am the name component</p>
            <p>The name is {this.state.firstname}</p>
            <button onClck={this.changeState}>Click Me</button>
            </div>
        )
    }
}

constructor(props) {
    super(props);
    this.state = {
      names: Map(),
      nameID: 0,

    }
  }
  newFirstnameFunction = (event) => {
    this.setState({ newFirstName: event.target.value });
  }

  const allNames = this.state.names.entrySeq().map(
    ([id, names]) => {
      return (
        <NamePosting
          firstname={firstname}
          id={id}
          key={id}
        />
      );
    }
  );
  return (
    <div>
      <p> this is the name board </p>
      {allDogs}
      <p>Add a name!</p>
      </div>
 
    export default Name;

