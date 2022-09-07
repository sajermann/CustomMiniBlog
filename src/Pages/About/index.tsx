import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function About() {
	return (
		<div className={styles.about}>
			<h2>
				Sobre o Mini <span>Blog</span>
			</h2>
			<p>
				Este projeto consiste em um blog feito com React no frontend e Firebase
				no backend
			</p>
			<Link to="/post/create" className="btn">
				Criar Post
			</Link>
		</div>
	);
}
