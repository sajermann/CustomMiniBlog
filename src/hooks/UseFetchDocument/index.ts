import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export function useFetchDocument(docCollection: string, id: string) {
	const [document, setDocument] = useState<any>(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [cancelled, setCancelled] = useState(false);

	async function load() {
		if (cancelled) return;

		setLoading(true);

		try {
			const docRef = await doc(db, docCollection, id);
			const docSnap = await getDoc(docRef);

			setDocument(docSnap.data());
			setLoading(false);
		} catch (errorTemp: any) {
			console.log({ errorTemp });
			setError(errorTemp.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		load();
		return () => setCancelled(true);
	}, [docCollection, id, cancelled]);

	return { document, error, loading };
}
