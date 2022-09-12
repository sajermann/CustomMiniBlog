import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routes from './Pages/Routes';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import useAuthentication from './hooks/UseAuthentication';

function App() {
	const [user, setUser] = useState<User | null>(null);
	const { auth } = useAuthentication();
	const [loadingUser, setLoadingUser] = useState(true);

	useEffect(() => {
		setLoadingUser(true);
		onAuthStateChanged(auth, userTemp => {
			setUser(userTemp);
			setLoadingUser(false);
		});
	}, [auth]);

	if (loadingUser) {
		return <p>Carregando...</p>;
	}

	return (
		<AuthProvider value={{ user }}>
			<BrowserRouter>
				<Navbar />
				<div className="container">
					<Routes />
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
