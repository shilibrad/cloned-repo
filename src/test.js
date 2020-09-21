import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('8xteAFFlQ8o8WxjmQ1Ns
').collection('firstName').doc('HZKqU6IeMO1SVdjsX9RA');

firestore.doc('/users/8xteAFFlQ8o8WxjmQ1Ns/firstName/HZKqU6IeMO1SVdjsX9RA');