import { Link } from 'react-router-dom';
import PostType from '../../types/PostType';
import styles from './index.module.css';

export default function PostDetail({ post }: { post: PostType }) {
	return (
		<div className={styles.postDetail}>
			<img src={post.image} alt={post.title} />
			<h2>{post.title}</h2>
			<p className={styles.createdBy}>{post.createdBy}</p>
			<div className={styles.tags}>
				{post.tags.map(tag => (
					<p key={tag}>
						<span>#</span>
						{tag}
					</p>
				))}
			</div>
			<Link to={post.id} className="btn btn-outline">
				Ler
			</Link>
		</div>
	);
}
