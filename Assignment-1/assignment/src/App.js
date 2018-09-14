import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      {name: 'Raghav', age: 28},
      {name: 'Mihir', age: 34}
    ]
  };

  userNamechangedHandler = (event) => {
    // console.log("i was called");
    // console.log("event:",name);
    this.setState( {
      username: [
        {name: 'Raghav', age: 28},
        {name: event.target.value, age: 34}
      ]
    });
    console.log("printing state", this.state);
  };

  render() {
    return (
      <div className="App">
          <UserOutput name= {this.state.username[0].name} age = {this.state.username[0].age}/>
          <UserOutput name= {this.state.username[1].name} age = {this.state.username[1].age}/>
          <br>
          </br>
          <UserInput changed ={this.userNamechangedHandler} currentName ={this.state.username[1].name}/>
      </div>  
    );
  }
}

export default App;
