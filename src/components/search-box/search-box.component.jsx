import React, { Component } from 'react'
 import './search-box.css';
 
class SearchBox extends Component {
	render() {
	const { onChangeHandler, placeholder, className } = this.props;
		return (
			<div><input className={`search-box  ${className}`} type='search' 
			placeholder={placeholder}
			onChange={onChangeHandler}/></div>
		)
	}
}

export default SearchBox;