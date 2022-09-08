import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

type Props = {
	dataUser: {
		email: string;
		password: string;
		displayName: string;
	};
};

export default function useAuthentication() {
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [cancelled, setCancelled] = useState(false);

	const auth = getAuth();

	function checkIfIsCancelled() {
		if (cancelled) {
			return;
		}
		console.log('Not Cancelled');
	}

	async function createUser({ dataUser }: Props) {
		checkIfIsCancelled();
		setLoading(true);
		setErrorMessage('');
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				dataUser.email,
				dataUser.password
			);

			await updateProfile(user, { displayName: dataUser.displayName });
			setLoading(false);
			return user;
		} catch (errorCatch: any) {
			console.log({ errorCatch });
			let systemErrorMessage = '';
			if (errorCatch.message.includes('Password')) {
				systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.';
			} else if (errorCatch.message.includes('email-already')) {
				systemErrorMessage = 'E-mail já cadastrado.';
			} else {
				systemErrorMessage = 'Ocorreu um erro, por favor tenta mais tarde.';
			}
			setErrorMessage(systemErrorMessage);
			setLoading(false);
			return null;
		}
	}

	async function login(email: string, password: string) {
		checkIfIsCancelled();

		setLoading(true);
		setErrorMessage('');
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setLoading(false);
		} catch (errorCatch: any) {
			console.log({ errorCatch });
			let systemErrorMessage = '';
			if (
				errorCatch.message.includes('user-not-found') ||
				errorCatch.message.includes('password')
			) {
				systemErrorMessage = 'Dados incorretos';
			} else {
				systemErrorMessage = 'Ocorreu um erro';
			}
			setErrorMessage(systemErrorMessage);
			setLoading(false);
			return null;
		}
		return null;
	}

	async function logout() {
		checkIfIsCancelled();
		signOut(auth);
	}

	useEffect(() => {
		console.log('Iniciando useAuthentication');
		return () => setCancelled(true);
	}, []);

	return { auth, createUser, errorMessage, loading, logout, login };
}
