/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/UseFetchDocument';
import { useUpdateDocument } from '../../hooks/UseUpdateDocument';
import styles from './index.module.css';

export default function UpdatePost() {
	const { id } = useParams<{ id: string }>();
	const { document: post } = useFetchDocument('posts', id);
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [formError, setFormError] = useState('');
	const { updateDocument, response } = useUpdateDocument('posts');
	const { user } = useAuthContext();
	const history = useHistory();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log({ formError });
		if (formError !== '') {
			return;
		}

		const data = {
			title,
			image,
			body,
			tags,
			uid: user?.uid,
			createdBy: user?.displayName,
		};

		updateDocument(id, data);

		history.push('/dashboard');
	}

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setBody(post.body);
			setImage(post.image);
			setTags(post.tags.join(', '));
		}
	}, [post]);

	return (
		<div className={styles.updatePost}>
			{post && (
				<>
					<h2>Atualizar Post: {post.title}</h2>
					<p>Altere os dados do post como desejar</p>
					{image !== '' && formError === '' && (
						<img
							src={image}
							alt="img"
							onError={() =>
								image !== '' && setFormError('Insira uma url válida')
							}
							onLoad={() => setFormError('')}
						/>
					)}
					<form onSubmit={handleSubmit}>
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
								onChange={e =>
									setTags(
										e.target.value
											.split(',')
											.map(tag => tag.trim().toLowerCase())
									)
								}
							/>
						</label>
						<button type="submit" className="btn" disabled={response.loading}>
							{response.loading ? 'Aguarde...' : 'Atualizar'}
						</button>
						{response.error && <p className={styles.error}>{response.error}</p>}
						{formError && <p className={styles.error}>{formError}</p>}
					</form>
				</>
			)}
		</div>
	);
}
