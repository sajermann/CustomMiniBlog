// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA9wz4RbvfS1LfL3_iKPhPNU-ChGiJyvBE',
	authDomain: 'miniblog-23025.firebaseapp.com',
	projectId: 'miniblog-23025',
	storageBucket: 'miniblog-23025.appspot.com',
	messagingSenderId: '361545691744',
	appId: '1:361545691744:web:b4bf95718369e3a0eb0905',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log({ app });
const db = getFirestore(app);
console.log({ db });

// eslint-disable-next-line import/prefer-default-export
export { db };
