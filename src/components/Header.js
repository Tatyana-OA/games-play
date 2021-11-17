//Basic function declaration
//props.navigationChangeHandler == {navigationChangeHandler} destructured

import { NavLink } from 'react-router-dom';
import './Header.css';
function Header(){
	// use with activeStyle and NavLink
	// let activeNavStyle = {
	// 	color: 'orange',
	// 	textDecoration: 'underline'
	// };
	return (
		<header>
		<h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
		<nav>
			<NavLink  activeClassName="active-nav-item" to="/games">All games</NavLink>
			<div id="user">
				<NavLink  activeClassName="active-nav-item" to="/create-game">Create Game</NavLink>
				<NavLink activeClassName="active-nav-item" to="/logout">Logout</NavLink>
			</div>
			<div id="guest">
				<NavLink activeClassName="active-nav-item" to="/login">Login</NavLink>
				<NavLink activeClassName="active-nav-item" to="/register">Register</NavLink>
			</div>
		</nav>
	</header>
	)
}

export default Header;