import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

export default function Navbar() {
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
				<li>
					<NavLink
						to="/about"
						exact
						className={isActive => (isActive ? styles.active : '')}
					>
						Sobre
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
