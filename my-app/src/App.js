import React, { Component } from "react";
import "./App.css";
import "./Person/Person.css";
// import Radium, {StyleRoot} from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'kasd1', name: "Raghav", age: 28 },
      { id: 'alksdn', name: "Anam", age: 12 },
      { id: '123nd',  name: "Mihir", age: 32 }
    ],
    otherState: "This is other State",
    showPersons : false
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Clicked");
  //   // DON't DO THIS: this.state.persons[0].name = "Raghvendra";
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Anam", age: 12 },
  //       { name: "Mihir", age: 34 }
  //     ]
  //   }
  //   )
  // };

 deletePersonHandler =(personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
 } 

nameChageHanlder = (event, id) => {
  const personIndex = this.state.persons.findIndex((p)=>{
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  
  // const person = Object.assign({},this.state.persons[personIndex]);
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons}
  )
}

togglePersonsHandler = () => {
  // console.log("clicked");
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor:'lightgreen',
      //   color: 'black'
      // }
    };  

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
              // click = {()=>{this.deletePersonHandler(index)}}
              click = {this.deletePersonHandler.bind(this,index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChageHanlder(event,person.id)}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Raghav!')}
            changed={this.nameChageHanlder}>
            My hobby is Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
      </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <=2 ) {
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>This is a React App!</h1>
          <p className={classes.join(' ')}>This is really working.</p>
          {/* <button onClick={this.switchNameHandler.bind(this,"Raghvendra")}>Switch Name</button> */}
          {/* <button style = {style}
          onClick={()=>{this.switchNameHandler("Raghvendra")}}>Switch Name</button> */}
          <button style = {style} onClick = {this.togglePersonsHandler}>Toggle Persons</button>
          {/* {
            this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Raghav!')}
                changed={this.nameChageHanlder}>
                My hobby is Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
          } */}
          {persons}
        </div>
      /* </StyleRoot> */
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'This is a React App'));
  }
}

export default App;
// export default Radium(App);