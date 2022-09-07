import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import useAuthentication from '../../hooks/UseAuthentication';
import styles from './index.module.css';

export default function Navbar() {
	const { user } = useAuthContext();
	const { logout } = useAuthentication();
	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.brand}>
				Mini <span>Blog</span>
			</NavLink>
			<ul className={styles.links_list}>
				<li>
					<NavLink
						to="/"
						exact
						className={isActive => (isActive ? styles.active : '')}
					>
						Home
					</NavLink>
				</li>
				{!user && (
					<>
						<li>
							<NavLink
								to="/login"
								exact
								className={isActive => (isActive ? styles.active : '')}
							>
								Entrar
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								exact
								className={isActive => (isActive ? styles.active : '')}
							>
								Cadastrar
							</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li>
							<NavLink
								to="/post/create"
								exact
								className={isActive => (isActive ? styles.active : '')}
							>
								Novo Post
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard"
								exact
								className={isActive => (isActive ? styles.active : '')}
							>
								Dashboard
							</NavLink>
						</li>
					</>
				)}
				<li>
					<NavLink
						to="/about"
						exact
						className={isActive => (isActive ? styles.active : '')}
					>
						Sobre
					</NavLink>
				</li>
				{user && (
					<li>
						<button type="button" onClick={logout}>
							Sair
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
}
