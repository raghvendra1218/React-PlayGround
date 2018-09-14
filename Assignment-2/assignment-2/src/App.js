import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
      userInput: ''
  }
  inputChangeHandler =(event) => {
    this.setState({
      userInput : event.target.value
    });
  }

  inputCharDeleteHandler =(charIndex)=>{
    const userInputList = this.state.userInput.split('');
    userInputList.splice(charIndex,1);
    const updatedString = userInputList.join('');
    this.setState({userInput:updatedString});
    // const charIndex = this.state.userInput.split('').findIndex((ch)=>{
    //   return 
    // });

  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index)=>{
      return <Char 
      character = {ch} key ={index}
      click = {this.inputCharDeleteHandler.bind(this,index)}
      />
    });
    return (
      <div className="App">
      <br></br>
        <p>Enter the value below</p>
        <hr/>
        <input type = "text" onChange = {(event)=>{this.inputChangeHandler(event)}} 
        value = {this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
