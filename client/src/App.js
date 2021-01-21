import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Comments from "./pages/Comments";
import { Container } from "./components/Grid";
import Comment from "./pages/Comment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Manage from "./pages/Manage";
import Team from "./pages/team";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
	const [userState, setUserState] = useState({});
	const [isUserLoginVerified, setIsUserLoginVerified] = useState(false);

	useEffect(() => {
		// auth user on first render
		console.log("calling Authenticate")
		authenticate()
	}, []);

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
				//console.log('user:', data);				
				setUserState(data);
				//verify if user was authenticated and permited access to all pages, 
				//otherwise wait the load API, then show the Loading page
				setIsUserLoginVerified(true);
			})
			.catch((err) => {
				setIsUserLoginVerified(true);
				console.log('registered user:', err.response)
			
			});
	}

	return (
		<Router>
			<Head 
				auth={userState}
			/>
			<Container>
				<Switch>
					<Route
						exact
						path='/login'
						render={props => (
							<Login
								{...props}
								userState={userState}
								setUserState={setUserState}
							/> 
						)}
					/>
					<Route
						exact
						path='/signup'
						render={props => (
							<Signup
								{...props}
								authenticate={authenticate}
								user={userState}
							/>
						)}
					/>
					<ProtectedRoute exact path={["/", "/comments"]}>
						<Comments {...userState} user={isUserLoginVerified} />
					</ProtectedRoute>
					<ProtectedRoute exact path='/comments/:id' >
						<Comment {...userState} user={isUserLoginVerified} />
					</ProtectedRoute>
					<ProtectedRoute exact path="/manage">
						<Manage {...userState} user={isUserLoginVerified} />
					</ProtectedRoute>
					<ProtectedRoute exact path="/team">
						<Team {...userState} user={isUserLoginVerified} />
					</ProtectedRoute>

					<Route component={NoMatch} />
					
				</Switch>
			</Container>
			{/* { userState.email ? <Redirect to="/comments" /> : <></>} */}
			{/* { !(userState.email) && <Redirect to="/" />} */}
			<Footer />
		</Router>
	);
}

export default App;
