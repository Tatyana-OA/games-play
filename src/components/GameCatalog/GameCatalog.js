// on component mount -> the fetch request will be sent, hence - useEffect
import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import * as gameService from '../../services/gameService';

const GameCatalog = ({navigationChangeHandler}) => {
	//Default is an empty array
	const [games, setGames] = useState([])
	useEffect(() => {
			setTimeout(()=> {
				// Fetch is performed in the respective service
				gameService.getAll()
					.then(result => {
						setGames(result)
					})
			}, 1000)
	}, [])

	return (
		<section id="catalog-page">
		<h1>All Games</h1>
		{ games.length > 0
			? games.map(x => <GameCard key={x._id} game={x} />)
			: <h3 className="no-articles">No games yet</h3> }

	</section>
	)
}
export default GameCatalog;