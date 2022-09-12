/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuthentication from '../../hooks/UseAuthentication';
import styles from './index.module.css';

export default function Post() {
	const { id } = useParams<{ id: string }>();
	return (
		<div className={styles.post}>
			<h1>Post {id}</h1>
		</div>
	);
}
