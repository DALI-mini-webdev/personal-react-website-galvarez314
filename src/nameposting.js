import React, { Component } from 'react';

class NamePosting extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 render() {
   return (
     <div>
       <p>{this.props.firstname}</p>
     </div>
   )
 }
}

saveNameInfo = () => {
    let NameData = {
      firstname: this.state.newFirstName,
    }
    this.setState({
      names: this.state.names.set(this.state.namesID, NameData),
      namesID: this.state.namesID + 1,
    });
  }
 

export default NamePosting;

