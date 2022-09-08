/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import useAuthentication from '../../hooks/UseAuthentication';
import styles from './index.module.css';

export default function Login() {
	const [email, setEmail] = useState('bruno@gmail.com');
	const [password, setPassword] = useState('123456789');
	const [error, setError] = useState('');
	const { errorMessage, loading, login } = useAuthentication();

	useEffect(() => setError(errorMessage), [errorMessage]);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');
		await login(email, password);
	}

	return (
		<div className={styles.login}>
			<h1>Entrar</h1>
			<p>Faça o login para poder utilizar o sistema</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email:</span>
					<input
						type="email"
						name="email"
						placeholder="Email do usuário"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type="password"
						name="password"
						placeholder="Senha do usuário"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</label>

				<button type="submit" className="btn" disabled={loading}>
					{loading ? 'Aguarde...' : 'Entrar'}
				</button>
				{error && <p className={styles.error}>{error}</p>}
			</form>
		</div>
	);
}
