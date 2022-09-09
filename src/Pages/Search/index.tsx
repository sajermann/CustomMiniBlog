import { Link } from 'react-router-dom';
import PostDetail from '../../Components/PostDetail';
import { useFetchDocuments } from '../../hooks/UseFetchDocuments';
import useQuery from '../../hooks/UseQuery';
import styles from './index.module.css';

export default function Search() {
	const query = useQuery();
	const search = query.get('q');

	const { documents: posts } = useFetchDocuments('posts', search);
	return (
		<div className={styles.search}>
			<h2>Search</h2>
			<div>
				{posts && posts.length === 0 && (
					<div className={styles.noposts}>
						<p>Não foram encontrado posts a partir da sua busca</p>
						<Link to="/" className="btn btn-dark">
							Voltar
						</Link>
					</div>
				)}
				{posts &&
					posts.map((post: any) => <PostDetail key={post.id} post={post} />)}
			</div>
		</div>
	);
}
