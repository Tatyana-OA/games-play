import {useState}from 'react';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog/GameCatalog';
import ErrorPage from './components/404';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [page, setPage] = useState('/home');

	const navigationChangeHandler = (path) => {
		console.log(path)
		setPage(path);
	}
	// For each path, use create Element for each view

	const router = (path) => {
		let pathNames = path.split('/');
		let rootPath = pathNames[1];
		let argument = pathNames[2];

		const routes = {
			'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
			'games': <GameCatalog navigationChangeHandler = {navigationChangeHandler}/>,
			'login': <Login />,
			'register': <Register />,
			'create-game': <CreateGame />,
			'details': <GameDetails id={argument}/>

		}
		return routes[rootPath];

	}

    return (
        <div id="box">
			{/* Callbacks from parent to child component will help child trigger change in parent */}
			<Header
			navigationChangeHandler={navigationChangeHandler}
			/>

            <main id="main-content">
				{/* Switch works much like switch case (conditional rendering based on route) - finding match and breaking; Note exact is still needed as / is also included in /games */}
				<Switch>
				<Route path="/" exact component={WelcomeWorld}/>
				<Route path="/games" component={GameCatalog}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/create-game" component={CreateGame}/>
				</Switch>
            </main>

        </div>
    );
}

export default App;
