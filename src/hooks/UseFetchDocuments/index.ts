import { useState, useEffect, useReducer } from 'react';
import {
	collection,
	addDoc,
	Timestamp,
	query,
	orderBy,
	onSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

export function useFetchDocuments(
	docCollection: string,
	search?: string,
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

		try {
			const q = await query(collectionRef, orderBy('createdAt', 'desc'));
			await onSnapshot(q, querySnapshot => {
				const result = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				console.log({ result });
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
