import { useState, useEffect } from 'react';
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	where,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

export function useFetchDocuments(
	docCollection: string,
	search: string | null,
	uuid?: string
) {
	const [documents, setDocuments] = useState<any>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [cancelled, setCancelled] = useState(false);

	async function load() {
		if (cancelled) return;

		setLoading(true);

		const collectionRef = await collection(db, docCollection);
		let q;
		try {
			if (search) {
				q = await query(
					collectionRef,
					where('tags', 'array-contains', search),
					orderBy('createdAt', 'desc')
				);
			} else if (uuid) {
				q = await query(
					collectionRef,
					where('uid', '==', uuid),
					orderBy('createdAt', 'desc')
				);
			} else {
				q = await query(collectionRef, orderBy('createdAt', 'desc'));
			}
			await onSnapshot(q, querySnapshot => {
				const result = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				setDocuments(result);
			});
			setLoading(false);
		} catch (errorCatch: any) {
			console.log({ errorCatch });
			setError(errorCatch.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		load();
		return () => setCancelled(true);
	}, [docCollection, search, uuid, cancelled]);

	return { documents, error, loading };
}
