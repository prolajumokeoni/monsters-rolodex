import { Component } from "react";
import '../card-list/card-list.styles.css';
 class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className='card-list'>
			{monsters.map ((monster) => {
		const { name, email, id } = monster;
        return <div className='card-container' key={id}>
        <h1>{name}</h1>
				<img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} 
				alt={`monster ${name}`} />
				<h2>{name}</h2>
				<p>{email}</p>
        </div>
       })}
			 </div>
		)
	}
}

export default CardList;