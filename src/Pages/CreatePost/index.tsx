/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useCreatePost } from '../../hooks/UseCreatePost';
import styles from './index.module.css';

export default function CreatePost() {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const { insertDocument, response } = useCreatePost('posts');
	const { user } = useAuthContext();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFormError('');
		insertDocument({
			title,
			image,
			body,
			tags,
			uid: user?.uid,
			createdBy: user?.displayName,
		});
	}

	return (
		<div className={styles.createPost}>
			<h2>Criar Post</h2>
			<p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Título</span>
					<input
						type="text"
						value={title}
						name="title"
						required
						placeholder="Pense em um bom título"
						onChange={e => setTitle(e.target.value)}
					/>
				</label>
				<label>
					<span>Url da imagem</span>
					<input
						type="text"
						value={image}
						name="image"
						required
						placeholder="Insira uma imagem que representa o seu Post"
						onChange={e => setImage(e.target.value)}
					/>
				</label>
				<label>
					<span>Conteúdo</span>
					<textarea
						value={body}
						name="body"
						required
						placeholder="Insira o conteúdo do Post"
						onChange={e => setBody(e.target.value)}
					/>
				</label>

				<label>
					<span>Tags</span>
					<input
						type="text"
						value={tags}
						name="tags"
						required
						placeholder="Insira as tags separadas por vírgula"
						onChange={e => setTags(e.target.value.split(','))}
					/>
				</label>
				<button type="submit" className="btn" disabled={response.loading}>
					{response.loading ? 'Aguarde...' : 'Salvar'}
				</button>
				{response.error && <p className={styles.error}>{response.error}</p>}
			</form>
		</div>
	);
}
