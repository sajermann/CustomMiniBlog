import { useState, useEffect, useReducer } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

const initialState = {
	loading: null,
	error: null,
};

const insertReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOADING':
			return { loading: true, error: null };
		case 'INSERTED_DOC':
			return { loading: false, error: null };
		case 'ERROR':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export function useCreatePost(docCollection: string) {
	const [response, dispatch] = useReducer(insertReducer, initialState);

	const [cancelled, setCancelled] = useState(false);

	function checkCancelBeforeDispatch(action: any) {
		if (!cancelled) {
			dispatch(action);
		}
	}

	async function insertDocument(document: any) {
		checkCancelBeforeDispatch({ type: 'LOADING' });
		try {
			const newDocument = { ...document, createdAt: Timestamp.now() };
			const insertedDocument = await addDoc(
				collection(db, docCollection),
				newDocument
			);
			checkCancelBeforeDispatch({
				type: 'INSERTED_DOC',
				payload: insertedDocument,
			});
		} catch (error: any) {
			console.log({ error });
			checkCancelBeforeDispatch({
				type: 'ERROR',
				payload: error.message,
			});
		}
	}

	useEffect(() => {
		console.log('Iniciando useCreatePost');
		return () => setCancelled(true);
	}, []);

	return { insertDocument, response };
}
