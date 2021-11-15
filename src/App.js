import {useState}from 'react';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog';
import ErrorPage from './components/404';

function App() {
	const [page, setPage] = useState('/home');
	// For each path, use create Element for each view
	const routes = {
		'/home': <WelcomeWorld />,
		'/games': <GameCatalog />,
		'/login': <Login />,
		'/register': <Register />,
		'/create-game': <CreateGame />,

	}
	const navigationChangeHandler = (path) => {
		console.log(path)
		setPage(path);
	}
    return (
        <div id="box">
			{/* Callbacks from parent to child component will help child trigger change in parent */}
			<Header
			navigationChangeHandler={navigationChangeHandler}
			/>

            <main id="main-content">
				{/* All elements passed in between the component start and end will be rendered inside it though props.children */}
				{ routes[page] || <ErrorPage> <span>Not the druids you are looking for, eh?</span></ErrorPage> }
            </main>

        </div>
    );
}

export default App;
