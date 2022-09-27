import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
    
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => response.json())
  .then((users) => 
  this.setState(
    () => {
    return { monsters: users };
  }
  // ,
  // () => {
  //   console.log(this.state);
  // }
  ))
}
onSearchChange = (event) => {
  const searchField = event.target.value.toLowerCase();
this.setState(() => {
  return { searchField };
})
}
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsts = monsters.filter((monster) => { 
      return monster.name.toLowerCase().includes(searchField);
  });

    return (
      <div className="App">
      <h1 className="app-title">Monst Rolodex</h1>
      <SearchBox className={"monsters-searchbox"}
       onChangeHandler={onSearchChange} placeholder='search monsters' />
      <CardList monsters={filteredMonsts} />
      </div>
    );
  }
}

export default App;

