//Basic function declaration
//props.navigationChangeHandler == {navigationChangeHandler} destructured

import { Link } from 'react-router-dom';
function Header({navigationChangeHandler}){
	const onHeaderClick = (e) => {
		e.preventDefault();
		if (e.target.tagName=='A') {
			const url = new URL(e.target.href)
			navigationChangeHandler(url.pathname)
		}

	}
	return (
		<header onClick={onHeaderClick}>
		<h1><Link className="home" to="/">GamesPlay</Link></h1>
		<nav>
			<Link to="/games">All games</Link>
			<div id="user">
				<Link to="/create-game">Create Game</Link>
				<Link to="/logout">Logout</Link>
			</div>
			<div id="guest">
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</nav>
	</header>
	)
}

export default Header;