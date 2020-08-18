import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import SignUp from './components/sign-up/SignUp'
import SignIn from './components/sign-in/SignIn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/private-route/PrivateRoute'
import WorkoutTracker from './components/workout-tracker/WorkoutTracker'
import Home from './components/home/Home'
import Workout from './components/workout/Workout'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route path='/' exact>
					<PrivateRoute>
						<Home />
					</PrivateRoute>
				</Route>
				<Route path='/workout-tracker'>
					<PrivateRoute>
						<WorkoutTracker />
					</PrivateRoute>
				</Route>
				<Route path='/workouts/:name'>
					<PrivateRoute>
						<Workout />
					</PrivateRoute>
				</Route>
				<Route path='/sign-up'>
					<SignUp />
				</Route>
				<Route path='/sign-in'>
					<SignIn />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
