import React from 'react';

import Panel from './components/Panel';
import Login from './components/Login';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={Panel} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/admin" component={Admin} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
