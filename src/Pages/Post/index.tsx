/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuthentication from '../../hooks/UseAuthentication';
import { useFetchDocument } from '../../hooks/UseFetchDocument';
import styles from './index.module.css';

export default function Post() {
	const { id } = useParams<{ id: string }>();
	const { document: post, loading } = useFetchDocument('posts', id);
	return (
		<div className={styles.container}>
			{loading && <p>Carregando Post...</p>}
			{post && (
				<>
					<h1>{post.title}</h1>
					<img src={post.image} alt={post.title} />
					<p>{post.body}</p>
					<h3>Este post trata sobre: </h3>
					<div className={styles.tags}>
						{post.tags.map((tag: any) => (
							<p key={tag}>
								<span>#</span>
								{tag}
							</p>
						))}
					</div>
				</>
			)}
		</div>
	);
}
