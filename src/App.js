import React from 'react';
import Panel from './components/Panel';
import Login from './components/Login';
import Admin from './components/Admin';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Panel} />
					<Route path="/login" component={Login} />
					<Route path="/admin" component={Admin} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
