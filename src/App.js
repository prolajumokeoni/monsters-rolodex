import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
    
    console.log('constructor')
  }

componentDidMount() {
  console.log('mount')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => response.json())
  .then((users) => 
  this.setState(
    () => {
    return { monsters: users };
  },
  () => {
    console.log(this.state);
  }
  ))
}
onSearchChange = (event) => {
  const searchField = event.target.value.toLowerCase();
this.setState(() => {
  return { searchField };
})
}
  render() {
    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsts = monsters.filter((monster) => { 
      return monster.name.toLowerCase().includes(searchField);
  });

    return (
      <div className="App">
      <input className="search-box" type='search' placeholder="search monsters"
       onChange={onSearchChange}/>
      {filteredMonsts.map ((monster) => {
        return <div key={monster.id}>
        <h1>{monster.name}</h1>
        </div>
      })}

      </div>
    );
  }
}

export default App;

