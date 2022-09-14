import { useState, useEffect, useReducer } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const initialState = {
	loading: null,
	error: null,
};

const updateReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOADING':
			return { loading: true, error: null };
		case 'UPDATED_DOC':
			return { loading: false, error: null };
		case 'ERROR':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export function useUpdateDocument(docCollection: string) {
	const [response, dispatch] = useReducer(updateReducer, initialState);

	const [cancelled, setCancelled] = useState(false);

	function checkCancelBeforeDispatch(action: any) {
		if (!cancelled) {
			dispatch(action);
		}
	}

	async function updateDocument(id: string, data: any) {
		checkCancelBeforeDispatch({ type: 'LOADING' });
		try {
			const docRef = await doc(db, docCollection, id);
			const updatedDocument = await updateDoc(docRef, data);

			checkCancelBeforeDispatch({
				type: 'UPDATED_DOC',
				payload: updatedDocument,
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
		console.log('Iniciando useUpdateDocument');
		return () => setCancelled(true);
	}, []);

	return { updateDocument, response };
}
