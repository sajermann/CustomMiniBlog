import useQuery from '../../hooks/UseQuery';
import styles from './index.module.css';

export default function Search() {
	const query = useQuery();
	const search = query.get('q');
	return (
		<div className={styles.search}>
			<h2>Search</h2>
			<p>{search}</p>
		</div>
	);
}
