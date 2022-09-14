import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/UseFetchDocuments';
import { useDeleteDocument } from '../../hooks/UseDeleteDocument';
import styles from './index.module.css';

export default function Dashboard() {
	const { user } = useAuthContext();
	const uid = user?.uid;

	const { documents: posts, loading } = useFetchDocuments('posts', null, uid);
	const { deleteDocument } = useDeleteDocument('posts');

	if (loading) {
		return <p>Carregando...</p>;
	}

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
				<>
					<div className={styles.post_header}>
						<span>Título</span>
						<span>Ações</span>
					</div>
					{posts &&
						posts.map((post: any) => (
							<div key={post.id} className={styles.post_row}>
								<p>{post.title}</p>
								<div>
									<Link to={`/post/${post.id}`} className="btn btn-outline">
										Ver
									</Link>
									<Link
										to={`/posts/update/${post.id}`}
										className="btn btn-outline"
									>
										Editar
									</Link>
									<button
										type="button"
										onClick={() => deleteDocument(post.id)}
										className="btn btn-outline btn-danger"
									>
										Excluir
									</button>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
}
