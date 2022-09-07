/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useState } from 'react';
import styles from './index.module.css';

export default function CreatePost() {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [formError, setFormError] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
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
				<button type="submit" className="btn" disabled={loading}>
					{loading ? 'Aguarde...' : 'Salvar'}
				</button>
				{formError && <p className={styles.error}>{formError}</p>}
			</form>
		</div>
	);
}
