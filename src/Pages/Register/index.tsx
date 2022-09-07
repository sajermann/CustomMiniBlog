/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useState } from 'react';
import styles from './index.module.css';

export default function Register() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError('');
		const user = {
			displayName,
			email,
			password,
		};
		console.log({ password, confirmPassword });
		if (password !== confirmPassword) {
			setError('As senhas precisam ser iguais');
			return;
		}
		console.log({ user });
	}

	return (
		<div className={styles.register}>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuário e compartilhe suas histórias</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome:</span>
					<input
						type="text"
						name="displayName"
						placeholder="Nome do usuário"
						required
						value={displayName}
						onChange={e => setDisplayName(e.target.value)}
					/>
				</label>
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
				<label>
					<span>Confirmação Senha:</span>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirme a senha do usuário"
						required
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
					/>
				</label>

				<button type="submit" className="btn">
					Cadastrar
				</button>
				{error && <p className={styles.error}>{error}</p>}
			</form>
		</div>
	);
}
