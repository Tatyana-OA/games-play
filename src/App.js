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
				{/* All elements passed in between the component start and end will be rendered inside it though props.children */}
				{ router(page) || <ErrorPage> <span>Not the druids you are looking for, eh?</span></ErrorPage> }
            </main>

        </div>
    );
}

export default App;
