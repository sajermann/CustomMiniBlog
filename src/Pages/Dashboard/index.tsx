import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import styles from './index.module.css';

export default function Dashboard() {
	const { user } = useAuthContext();
	const uid = user?.uid;

	const posts: any = [];
	return (
		<div className={styles.container}>
			<h2>Dashboard</h2>
			<p>Gerencie os seus posts</p>
			{posts && posts.length === 0 ? (
				<div className={styles.noposts}>
					<p>Não foram encontrados posts</p>
					<Link to="/posts/create" className="btn">
						Criar primeiro post
					</Link>
				</div>
			) : (
				<p>Tem posts</p>
			)}
		</div>
	);
}
