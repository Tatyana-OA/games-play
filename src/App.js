import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog/GameCatalog';
import ErrorPage from './components/404';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    return (
        <div id="box">
			{/* Callbacks from parent to child component will help child trigger change in parent */}
			<Header/>

            <main id="main-content">
				{/* Switch works much like switch case (conditional rendering based on route) - finding match and breaking; Note exact is still needed as / is also included in /games */}
				<Switch>
				<Route path="/" exact component={WelcomeWorld}/>
				<Route path="/games" component={GameCatalog}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/create-game" component={CreateGame}/>
				{/* using Router with router params  */}
				<Route path="/details/:gameId" component={GameDetails}></Route>
				<Route path="/logout" render={
					() => (<Redirect to="/games"/>)
				}/>
				<Route path="*" component={ErrorPage}></Route>
				</Switch>
            </main>

        </div>
    );
}

export default App;
