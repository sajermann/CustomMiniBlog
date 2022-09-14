import { useState, useEffect, useReducer } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const initialState = {
	loading: null,
	error: null,
};

const deleteReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'LOADING':
			return { loading: true, error: null };
		case 'DELETED_DOC':
			return { loading: false, error: null };
		case 'ERROR':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export function useDeleteDocument(docCollection: string) {
	const [response, dispatch] = useReducer(deleteReducer, initialState);

	const [cancelled, setCancelled] = useState(false);

	function checkCancelBeforeDispatch(action: any) {
		if (!cancelled) {
			dispatch(action);
		}
	}

	async function deleteDocument(id: string) {
		checkCancelBeforeDispatch({ type: 'LOADING' });
		try {
			const deletedDocument = await deleteDoc(doc(db, docCollection, id));

			checkCancelBeforeDispatch({
				type: 'DELETED_DOC',
				payload: deletedDocument,
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
		console.log('Iniciando useDeleteDocument');
		return () => setCancelled(true);
	}, []);

	return { deleteDocument, response };
}
