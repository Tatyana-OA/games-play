import {useState}from 'react';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog';

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
				{ routes[page] || <h2>ERROR</h2> }
            </main>

        </div>
    );
}

export default App;
