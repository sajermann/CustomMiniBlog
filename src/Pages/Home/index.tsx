import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PostDetail from '../../Components/PostDetail';
import { useFetchDocuments } from '../../hooks/UseFetchDocuments';
import PostType from '../../types/PostType';
import styles from './index.module.css';

export default function Home() {
	const [query, setQuery] = useState('');
	const { documents: posts, loading } = useFetchDocuments('posts', null);
	const history = useHistory();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!query) {
			return;
		}
		history.push(`/search?q=${query}`);
	}

	return (
		<div className={styles.home}>
			<h1>Veja os nossos posts mais recentes</h1>
			<form onSubmit={handleSubmit} className={styles.serchForm}>
				<input
					type="search"
					placeholder="Ou busque por tags..."
					onChange={e => setQuery(e.target.value)}
					value={query}
				/>
				<button type="submit" className="btn btn-dark">
					Pesquisar
				</button>
			</form>
			<div>
				<h1>Posts...</h1>
				{loading && <p>Carregando...</p>}
				{posts &&
					posts.map((post: PostType) => (
						<PostDetail key={post.id} post={post} />
					))}
				{posts && posts.length === 0 && (
					<div className={styles.noPosts}>
						<p>Não foram encontrados posts</p>
						<Link to="/post/create" className="btn">
							Criar primeiro post
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
