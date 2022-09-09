import { Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import About from '../About';
import CreatePost from '../CreatePost';
import Dashboard from '../Dashboard';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Search from '../Search';

export default function Routes() {
	const { user } = useAuthContext();
	return (
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/about" exact>
				<About />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/login" exact>
				{!user ? <Login /> : <Redirect to="/" />}
			</Route>
			<Route path="/register" exact>
				{!user ? <Register /> : <Redirect to="/" />}
			</Route>
			<Route path="/post/create" exact>
				{user ? <CreatePost /> : <Redirect to="/login" />}
			</Route>
			<Route path="/dashboard" exact>
				{user ? <Dashboard /> : <Redirect to="/login" />}
			</Route>
		</Switch>
	);
}
