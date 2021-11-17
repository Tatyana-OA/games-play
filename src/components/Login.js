import {useHistory} from 'react-router-dom';

const Login = ({history}) => {
	const onFormSubmit= (e) => {
		e.preventDefault();
		// useHistory can be used when the component is not a direct child of the Router; history injection
		// let history = useHistory();
		// Simulation of login; TODO actual login => redirect to games on Login
		history.push('/games');
	}
	return (

		<section id="login-page" className="auth">
		<form id="login" onSubmit={onFormSubmit}>

			<div className="container">
				<div className="brand-logo"></div>
				<h1>Login</h1>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

				<label htmlFor="login-pass">Password:</label>
				<input type="password" id="login-password" name="password" />
				<input type="submit" className="btn submit" value="Login" />
				<p className="field">
					<span>If you don't have profile click <a href="#">here</a></span>
				</p>
			</div>
		</form>
	</section>
	)
}

export default Login;